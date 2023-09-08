import type { Author } from "@/types/Product";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ name: "Augusto", lastname: "Marinaro" } as Author);
}
