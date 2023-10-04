import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany({});

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newProducts = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(newProducts);
}
