import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!user)
    return NextResponse.json({ message: "user not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  try {
    const body = await request.json();

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!user)
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: body.name,
        email: body.email,
      },
    });

    return NextResponse.json(updatedUser, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user) {
    return NextResponse.json({ message: "User Not Found" }, { status: 400 });
  }

  const deleteUser = await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json(
    { message: "User Deleted Successfully", id: deleteUser.id },
    { status: 201 }
  );
}
