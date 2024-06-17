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

    const query = "INSERT INTO users (email, password) VALUES ($1, $2)";
    const values = [email, hashedPassword];

    await pool.query(query, values);

    try{
      const res = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email}),
      })
      const data = await res.json()
      console.log(data.message)
      return NextResponse.json(
        { error: "User created successfully!" },
        { status: 200 }
      );
    }catch(error){
      return NextResponse.json(
        { error: "Error registering user" },
        { status: 500 },
      );
    }
  } catch (e) {
    console.error("ERROR:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
