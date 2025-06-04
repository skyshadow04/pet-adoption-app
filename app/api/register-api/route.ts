import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { account_name, account_email, account_password, account_con_number, verification_token } = await request.json();

    // Check if email already exists
    const existing = await prisma.pet_adopt_account.findUnique({
      where: { account_email },
    });
    if (existing) {
      return NextResponse.json({ ok: false, message: "Email already registered." }, { status: 400 });
    }

    // Create new account
    const user = await prisma.pet_adopt_account.create({
      data: {
        account_name,
        account_email,
        account_password, // In production, hash the password!
        account_con_number,
        account_verified: false,
        verification_token: verification_token
      },
    });

    return NextResponse.json({ ok: true, user: { account_id: user.account_id, account_email: user.account_email } });
  } catch (error) {
    console.error("Register API error:", error);
    return NextResponse.json({ ok: false, message: "Registration failed." }, { status: 500 });
    }
}