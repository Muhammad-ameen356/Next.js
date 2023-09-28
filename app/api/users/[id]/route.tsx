import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ message: "user not found" }, { status: 404 });

  return NextResponse.json({ status: 200, message: "My Name" });
}
