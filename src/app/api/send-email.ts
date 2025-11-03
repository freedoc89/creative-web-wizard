// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

import { NextApiRequest, NextApiResponse } from "next";

// export async function POST(req: Request) {
//   const body = await req.json();

//   const { name, email, message, type, selectedPackage } = body;

//   const userSubject =
//     type === "rendeles"
//       ? "Megrendelés visszaigazolása"
//       : "Ajánlatkérés fogadva";

//   const adminSubject =
//     type === "rendeles"
//       ? "Új megrendelés érkezett"
//       : "Új ajánlatkérés érkezett";

//   const adminEmail = "sajat@emailem.hu";

//   // SMTP beállítás
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS
//     }
//   });

//   try {
//     // Email küldés neked
//     await transporter.sendMail({
//       from: `"Weboldal" <${process.env.SMTP_USER}>`,
//       to: adminEmail,
//       subject: adminSubject,
//       text: `
// Név: ${name}
// Email: ${email}
// Típus: ${type}
// Üzenet: ${message}
// Csomag: ${selectedPackage ? selectedPackage.name : "N/A"}
//       `
//     });

//     // Email a felhasználónak
//     await transporter.sendMail({
//       from: `"Weboldal" <${process.env.SMTP_USER}>`,
//       to: email,
//       subject: userSubject,
//       text:
//         type === "rendeles"
//           ? `Köszönjük megrendelését! Csomag: ${selectedPackage?.name}`
//           : `Köszönjük az ajánlatkérést, hamarosan válaszolunk!`
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email hiba:", error);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Data", req.body);

  res.status(200).json({ name: "John Doe" });
}
