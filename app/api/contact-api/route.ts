import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  const sql = neon(process.env.DATABASE_URL!);
  try {
    const { name, email, message } = await request.json();
    await sql`
      INSERT INTO contact_submissions (contact_user_name, contact_user_email, contact_user_comment)
      VALUES (${name}, ${email}, ${message})
    `;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
  }
}