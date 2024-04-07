import { EmailTemplate } from "@/app/_components/order-email";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { fullName, title, email, fromAddress, street, zipCode } =
    await req.json();

  try {
    const data = await resend.emails.send({
      from: "MoveMate <onboarding@resend.dev>",
      to: ["alislami474@gmail.com"],
      subject: String(title), // "Hello world",
      react: EmailTemplate({
        fullName,
        title,
        fromAddress,
        street,
        zipCode,
        email,
      }),
      text: "from MoveMate",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
