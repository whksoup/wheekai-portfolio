import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Prints to your npm run dev terminal in red so it's easy to spot
  console.error("\n\x1b[41m\x1b[37m CLIENT ERROR \x1b[0m");
  console.error("\x1b[31m" + body.message + "\x1b[0m");
  if (body.stack) {
    console.error("\x1b[33m" + body.stack + "\x1b[0m");
  }
  if (body.url) {
    console.error("\x1b[36mOn page: " + body.url + "\x1b[0m");
  }
  console.error("");

  return NextResponse.json({ ok: true });
}
