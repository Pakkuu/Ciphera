import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import pool from "@/db";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const checkQuery = "SELECT * FROM users WHERE email = $1";
    const checkValues = [email];
    const checkResult = await pool.query(checkQuery, checkValues);

    if (checkResult.rows.length > 0) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await hash(password, 10);
    console.log(hashedPassword);

    const query = "INSERT INTO users (email, password) VALUES ($1, $2)";
    const values = [email, hashedPassword];

    await pool.query(query, values);

    return NextResponse.json({ message: "User created successfully", status: 200 });
  } catch (e) {
    console.error("ERROR:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
