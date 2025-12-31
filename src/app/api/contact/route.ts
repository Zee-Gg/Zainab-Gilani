process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, projectType, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject || `Message from ${name} - ${projectType || 'General Inquiry'}`,
      text: `From: ${name} <${email}>\nProject Type: ${projectType || 'Not Specified'}\n\n${message}`,
    });

    return NextResponse.json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json({ success: false, message: "❌ Failed to send email." }, { status: 500 });
  }
}
