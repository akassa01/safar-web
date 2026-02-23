import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase env vars");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: email.toLowerCase().trim() });

  if (error) {
    // Unique violation — already signed up
    if (error.code === "23505") {
      return NextResponse.json({ error: "This email is already on the list." }, { status: 409 });
    }
    console.error("Waitlist insert error:", error);
    return NextResponse.json({ error: "Failed to join waitlist." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
