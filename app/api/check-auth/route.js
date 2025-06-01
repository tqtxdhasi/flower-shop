import { NextResponse } from "next/server";

export async function GET(request) {
  const cookie = request.cookies.get("admin-auth");
  if (cookie && cookie.value === "true") {
    return NextResponse.json({ authenticated: true });
  }
  return NextResponse.json({ authenticated: false }, { status: 401 });
}
