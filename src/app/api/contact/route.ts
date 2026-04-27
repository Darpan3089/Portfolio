import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(20).max(2000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as unknown;
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;
    const contactEmail = process.env.CONTACT_EMAIL ?? "darpanpatel30899@gmail.com";

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `New message from ${name} via portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #ededed; border-radius: 12px;">
          <h2 style="color: #3b82f6; margin-bottom: 24px; font-size: 20px;">New Portfolio Contact</h2>
          <div style="margin-bottom: 16px;">
            <p style="color: #888; font-size: 12px; margin: 0 0 4px; text-transform: uppercase; letter-spacing: 0.1em;">From</p>
            <p style="color: #ededed; margin: 0; font-weight: 600;">${name}</p>
            <p style="color: #888; margin: 2px 0 0; font-size: 14px;">${email}</p>
          </div>
          <div style="border-top: 1px solid #1f1f1f; padding-top: 16px; margin-top: 16px;">
            <p style="color: #888; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
            <p style="color: #ededed; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
