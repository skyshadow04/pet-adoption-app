import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { account_email, account_password } = await request.json();

    // Fetch user from the database
    const user = await prisma.pet_adopt_account.findUnique({
      where: { account_email },
    });

    // Check if user exists and password matches
    if (!user || user.account_password !== account_password) {
      return NextResponse.json({ ok: false, message: "Invalid credentials" }, { status: 401 });
    }

    // Success: return user data (omit password in production)
    return NextResponse.json({
      ok: true,
      user: {
        account_id: user.account_id,
        account_name: user.account_name,
        account_email: user.account_email,
        account_role: user.account_role,
        account_created_date: user.account_created_date,
        account_valid: user.account_valid,
        account_verified: user.account_verified,
      },
    });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}