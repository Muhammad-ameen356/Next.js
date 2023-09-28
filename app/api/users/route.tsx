import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

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

  if (!body.name)
    return NextResponse.json({ message: "Invalid Name" }, { status: 400 });

  return NextResponse.json(body);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: Number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ message: "Success" });
}
