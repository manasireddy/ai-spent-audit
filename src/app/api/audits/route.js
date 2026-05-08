import { NextResponse } from "next/server"
import { supabase } from "@/lib/db"
import { calculateAudit } from "@/lib/pricing"
import { generateRecommendations } from "@/lib/recommendations"
import { generateSummary } from "@/lib/summary"

function createSlug(companyName) {
  return (
    companyName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "") +
    "-" +
    Math.random().toString(36).slice(2, 7)
  )
}

export async function POST(req) {
  try {
    const body = await req.json()

    const slug = createSlug(body.companyName || "audit")
    const audit = calculateAudit(body.tools || [])
    const recommendations = generateRecommendations(audit)
    const summary = generateSummary(audit)


   const { error } = await supabase.from("audits").insert({
  slug,
  company_name: body.companyName,
  total_spend: audit.actualSpend,
  expected_spend: audit.expectedSpend,
  overspend: audit.overspend,
  recommendations,
  summary
})

    if (error) throw error

    return NextResponse.json({
      success: true,
      slug
    })
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    )
  }
}