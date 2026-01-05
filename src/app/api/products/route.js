import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/connectToDB";
import Product from "@/models/products.model";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const {
      name,
      description,
      type,
      price,
      quantity,
      images,
      features,
    } = body;

    // Basic validation
    if (!name || !description || !type || !price || !quantity) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (images && images.length > 3) {
      return NextResponse.json(
        { message: "Maximum 3 images allowed" },
        { status: 400 }
      );
    }

    const product = await Product.create({
      name,
      description,
      type,
      price,
      quantity,
      images: images || [],
      features: features || [],
    });

    return NextResponse.json(
      { message: "Product added successfully", product },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const products = await Product.find().sort({ createdAt: -1 });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("GET /products error:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}