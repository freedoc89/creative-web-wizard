import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message, type, selectedPackage } = body;

  // const userSubject =
  //   type === "rendeles"
  //     ? "Megrendelés visszaigazolása"
  //     : "Ajánlatkérés fogadva";

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
      from: `"Kreatív Web Mágus" <${process.env.SMTP_USER}>`,
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

    await transporter.sendMail({
      from: `"Kreatív Web Mágus" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Köszönjük a megrendelését!",
      html: `
  <div style="font-family: Arial, sans-serif; color: #171717; line-height: 1.4; background-color: #f4f4f4; padding: 2rem;">
    <div style="
      margin: 0 auto; 
      background-image: url('https://creativewebwizard.hu/background-min.png'); 
      background-size: cover; 
      background-position: center; 
      border-radius: 12px;
      padding: 2rem;
      pointer-events:none;
      user-select:none;
    ">
      <!-- Logo -->
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="https://creativewebwizard.hu/Creative_Web_Wizard_logo.png" alt="Logo" style="max-height: 75px; height: auto; pointer-events:none;user-select:none;cursor:none;" />
      </div>

      <h2 style="color: #fff; text-align: center; font-size:1.6rem;">Köszönjük a megrendelését!</h2>
      <p style="text-align: center; font-size: 1rem;color: #fff;">Hamarosan felvesszük Önnel a kapcsolatot a részletek tisztázása érdekében.</p>

      <!-- Rendelés részletei -->
       <h2 style="margin-top: 2rem;color: #fff;font-size:1.2rem;text-align:center; margin-bottom:0;">Megrendelt szolgáltatás:</h2>
      <div style="margin:0 auto; 
                  width:max-content; 
                  margin-top: 0.5rem; 
                  background-color: #00091b; 
                  padding: 0.6rem; 
                  border-radius: 5px; 
                  color:white; 
                  border: 1px solid rgba(24, 74, 231, 0.7);
                  border-bottom: 3px solid rgba(24, 74, 231, 0.9);
                  border-right: 3px solid rgba(24, 74, 231, 0.9);">
      <p><strong>Csomag:</strong> ${selectedPackage?.label} - ${
        selectedPackage?.name
      }</p>
        <p><strong>Ár:</strong> ${selectedPackage?.price.toLocaleString(
          "hu-HU"
        )} Ft</p>
        ${
          selectedPackage?.description
            ? `*${selectedPackage.description.replace(/\n/g, "<br>")}</p>`
            : ""
        }
      </div>

      <!-- Footer -->
      <p style="text-align: center; margin-top: 2rem; font-size: 0.85rem; color: #888;">
        Kreatív Web Mágus Csapata!
      </p>
    </div>
  </div>
  `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email hiba:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
