import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactSchema } from "@/lib/validators";
import { postWebhook } from "@/lib/webhook";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = contactSchema.parse(body);

    await postWebhook(process.env.CONTACT_WEBHOOK_URL, {
      type: "contact",
      submittedAt: new Date().toISOString(),
      data: payload,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll be in touch within 2 hours.",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid request data." },
        { status: 400 }
      );
    }

    console.error("Contact submission error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit contact request." },
      { status: 500 }
    );
  }
}
