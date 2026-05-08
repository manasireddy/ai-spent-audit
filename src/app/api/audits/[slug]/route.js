import { NextResponse } from "next/server"
import { supabase } from "@/lib/db"

export async function GET(_, { params }) {
  const { slug } = await params

  const { data, error } = await supabase
    .from("audits")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error) {
    return NextResponse.json(
      { error: "Not found" },
      { status: 404 }
    )
  }

  return NextResponse.json(data)
}