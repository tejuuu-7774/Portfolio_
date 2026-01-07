import { NextResponse } from "next/server";

export async function POST() {
  console.log("Resume downloaded at", new Date().toISOString());
  return NextResponse.json({ success: true });
}
