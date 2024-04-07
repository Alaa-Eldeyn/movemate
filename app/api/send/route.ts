import { EmailTemplate } from "../../_components/email-template";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { fullName, title, description, email } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "MoveMate <onboarding@resend.dev>",
      to: ["alislami474@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        fullName,
        title,
        description,
        email,
      }),
      text: "from MoveMate",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
