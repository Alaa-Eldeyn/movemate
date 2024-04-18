import { EmailTemplate } from "@/app/_components/order-email";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, notes, lastName, email, address, phoneNumber, title } =
    await req.json();

  try {
    const data = await resend.emails.send({
      from: String(process.env.NEXT_PUBLIC_FROM_EMAIL),
      to: [String(process.env.NEXT_PUBLIC_TO_EMAIL)],
      subject: title,
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
        title,
        notes,
      }),
      text: "from MoveMate",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
