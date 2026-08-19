import { NextResponse } from "next/server";
import { Resend } from "resend";
export const runtime = "nodejs";
const TO_EMAIL = "feedback@ilaguard.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const rating = typeof body.rating === "string" ? body.rating.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";
    const page = typeof body.page === "string" ? body.page.trim() : "";

    // Honeypot: bots often fill hidden fields. Silently accept the request.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!rating || !message) {
      return NextResponse.json(
        { success: false, error: "Rating and feedback are required." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Feedback is too long." },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { success: false, error: "Feedback service is not configured." },
        { status: 500 }
      );
    }

    // Initialize Resend at request time rather than module evaluation time.
    // This prevents the Next.js build from failing when the environment
    // variable is unavailable during static build/collection.
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "IlaGuard Website <feedback@ilaguard.com>",
      to: [TO_EMAIL],
      replyTo: email || undefined,
      subject: `IlaGuard Website Feedback — ${rating}`,
      text: [
        "New feedback received from the IlaGuard website.",
        "",
        `Rating: ${rating}`,
        `Email: ${email || "Not provided"}`,
        `Page: ${page || "Not provided"}`,
        "",
        "Feedback:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Unable to send feedback right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback API error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to send feedback right now." },
      { status: 500 }
    );
  }
}
