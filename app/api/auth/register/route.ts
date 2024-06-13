import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import pool from "../../../../db";

export async function POST(request: Request) {
  console.log('here')
  try {
    const { email, password } = await request.json();
    //can handle additional validation of email and password here
    console.log({ email, password });

    // Check if the email already exists in the database
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

    // Insert the data into the PostgreSQL table
    const query = "INSERT INTO users (email, password) VALUES ($1, $2)"; //placeholder to protect against sql injections
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
