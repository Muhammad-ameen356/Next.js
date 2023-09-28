import { NextRequest, NextResponse } from "next/server";

// //* for prevent caching we use request: NextRequest
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Muhammad Ameen",
    },
    {
      id: 2,
      name: "Muhammad Ameen Zahid",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  return NextResponse.json(body);
}
