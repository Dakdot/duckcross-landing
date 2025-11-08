import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const formSchema = z.object({
  email: z.email(),
  timezone: z.string().optional(),
  language: z.string().optional(),
});

// Route for sign-ups
export async function POST(req: NextRequest) {
  try {
    const { email, timezone, language } = await req.json();

    if (!email)
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const existing = await db.email.findUnique({ where: { email } });

    if (existing)
      return NextResponse.json(
        { error: "Email is already in mailing list" },
        { status: 400 }
      );

    const validated = formSchema.safeParse({ email, timezone, language });

    if (!validated.success)
      return NextResponse.json(
        {
          error: "One or more fields failed validation",
        },
        { status: 400 }
      );

    const ip =
      req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";

    const userAgent = req.headers.get("user-agent") || "";

    const referrer = req.headers.get("referer") || "";

    const res = await db.email.create({
      data: {
        ...validated.data,
        privacyPolicyVersion: "25w29a",
        subscribedAt: new Date(),
        ipAddress: ip,
        userAgent,
        referrer,
      },
    });

    return NextResponse.json({ message: "Subscribed successfully" });
  } catch (err) {
    if (err instanceof SyntaxError)
      return NextResponse.json(
        { error: "Missing or invalid request body" },
        { status: 400 }
      );

    console.trace(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
