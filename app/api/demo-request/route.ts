import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { demoRequestSchema } from "@/lib/validators";
import { postWebhook } from "@/lib/webhook";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = demoRequestSchema.parse(body);
    const bookingId = randomUUID();

    await postWebhook(process.env.DEMO_WEBHOOK_URL, {
      type: "demo-request",
      submittedAt: new Date().toISOString(),
      bookingId,
      data: payload,
    });

    return NextResponse.json({
      success: true,
      bookingId,
      message: "Demo request received. We'll confirm shortly.",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid request data." },
        { status: 400 }
      );
    }

    console.error("Demo request error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit demo request." },
      { status: 500 }
    );
  }
}
