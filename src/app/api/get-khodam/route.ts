import { generateRandomSentence } from "@/utils/sentence-generator";
import { NextResponse, NextRequest } from "next/server";

export async function GET(_: NextRequest) {
  return NextResponse.json({
    status: 200,
    message: "Success",
    khodam: generateRandomSentence(),
  });
}
