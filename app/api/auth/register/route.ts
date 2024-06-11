import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    //can validate email and password here
    console.log({ email, password });
  } catch (e) {
    console.log(`ERROR: ${e}`);
  }

  return NextResponse.json({ message: "success" });
}
