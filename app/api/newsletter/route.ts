import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { newsletterSchema } from "@/lib/validators";
import { postWebhook } from "@/lib/webhook";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = newsletterSchema.parse(body);

    await postWebhook(process.env.NEWSLETTER_WEBHOOK_URL, {
      type: "newsletter",
      submittedAt: new Date().toISOString(),
      data: payload,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks for subscribing!",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid request data." },
        { status: 400 }
      );
    }

    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to subscribe." },
      { status: 500 }
    );
  }
}
