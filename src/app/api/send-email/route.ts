import { emailContent } from "@/data/emailTemplateContent";
import { FormMode } from "@/data/formDialogContent";
import { Locale } from "@/data/localization";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    name,
    email,
    message,
    type,
    selectedService,
    selectedPackage,
    locale
  } = body as {
    name: string;
    email: string;
    message: string;
    type: FormMode;
    selectedService?: string;
    selectedPackage?: {
      name: string;
      label: string;
      description: string | null;
      price: string;
      features: string[];
    } | null;
    locale: Locale;
  };

  const adminTexts = emailContent.admin;
  const userTexts = emailContent.user;

  const adminSubject = adminTexts.subjects[type][locale];

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
      from: `${userTexts.footer[locale]} <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_USER,
      subject: adminSubject,
      text: `
        ${adminTexts.labels.name[locale]}: ${name}
        ${adminTexts.labels.email[locale]}: ${email}
        ${adminTexts.labels.type[locale]}: ${type == "consultation" ? "Konzultáció" : "Árajánlatkérés"}
        ${adminTexts.labels.message[locale]}: ${message}
    ---  ${selectedPackage ? adminTexts.labels.package[locale].toUpperCase() : ""}  ---
    ${
      selectedPackage
        ? `Csomag neve: ${selectedPackage.label}
    Típus: ${selectedPackage.name}
    Ár: ${selectedPackage.price}
    Leírás: ${selectedPackage.description ?? "Nincs leírás"}`
        : selectedService
          ? `Kiválasztott szolgáltatás: ${selectedService}`
          : "Nincs kiválasztott szolgáltatás vagy csomag"
    }
  `
    });

    await transporter.sendMail({
      from: `${userTexts.footer[locale]} <${process.env.SMTP_USER}>`,
      to: email,
      subject: userTexts.subjects[type][locale],
      html: `
        <div style="font-family: Arial, sans-serif; color: #171717; line-height: 1.4; background-color: #f4f4f4; padding: 0.5rem;">
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
              <img src="https://creativewebwizard.hu/Creative_Web_Wizard_logo_${locale.toUpperCase()}.png" alt="Logo" style="max-height: 75px; height: auto; pointer-events:none;user-select:none;cursor:none;" />
            </div>
      
            <h2 style="color: #fff; text-align: center; font-size:1.6rem;">${userTexts.titles[type][locale]}</h2>
            <p style="text-align: center; font-size: 1rem;color: #fff;">${userTexts.messages[type][locale]}</p>
      
            <!-- Rendelés / Szolgáltatás részletei -->
            <h2 style="margin-top:2rem; font-size:1.4rem; text-align:center; text-decoration: underline; color:#fff;">${userTexts.packageSection.title[locale]}</h2>
            <div style="margin:0 auto; 
                        width:fit-content; 
                        margin-top: 0.5rem; 
                        background-color: #00091b; 
                        padding: 0.8rem; 
                        border-radius: 5px; 
                        color:white; 
                        border: 1px solid rgba(24, 74, 231, 0.7);
                        border-bottom: 3px solid rgba(24, 74, 231, 0.9);
                        border-right: 3px solid rgba(24, 74, 231, 0.9);">
                       ${
                         selectedPackage
                           ? `   <h2 style="color: #fff;font-size:1.2rem;text-align:center; margin-bottom:0; font-weight:700;">${selectedPackage?.label}</h2>
          <p><strong>${selectedPackage?.name}</strong></p>
                    <p>${userTexts.packageSection.priceLabel[locale]}: ${selectedPackage?.price.toLocaleString()}</p>
                    `
                           : `
                <h3 style="color: #fff; font-size:1.2rem; text-align:center; margin-top:0; font-weight:700; margin-bottom:0;">
                  ${selectedService || "Egyedi szolgáltatás"}
                </h3>
              `
                       }
                  </div>
                    <!-- Footer -->
            <p style="text-align: center; margin-top: 7rem; font-size: 0.85rem; color: #ebebeb;">
                   ${userTexts.footer[locale]}
            </p>
            </div>
      
          
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
