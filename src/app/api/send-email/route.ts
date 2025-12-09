import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message, type, selectedPackage } = body;

  const userSubject =
    type === "rendeles"
      ? "Megrendelés visszaigazolása"
      : "Ajánlatkérés fogadva";

  const adminSubject =
    type === "rendeles"
      ? "Új megrendelés érkezett"
      : "Új ajánlatkérés érkezett";

  const adminEmail = process.env.SMTP_USER;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    // Email neked
    await transporter.sendMail({
      from: `"Weboldal" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: adminSubject,
      text: `
Név: ${name}
Email: ${email}
Típus: ${type}
Üzenet: ${message}
Csomag: ${selectedPackage ? selectedPackage.name : "N/A"}
      `
    });

    // Email a felhasználónak
    await transporter.sendMail({
      from: `"Weboldal" <${process.env.SMTP_USER}>`,
      to: email,
      subject: userSubject,
      text:
        type === "rendeles"
          ? `Köszönjük megrendelését! Csomag: ${selectedPackage?.name}`
          : `Köszönjük az ajánlatkérést, hamarosan válaszolunk!`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email hiba:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
