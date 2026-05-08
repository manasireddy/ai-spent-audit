"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const TOOL_OPTIONS = [
  "ChatGPT Team",
  "Claude Team",
  "Cursor",
  "GitHub Copilot"
]

export default function AuditForm() {
  const router = useRouter()

  const [companyName, setCompanyName] = useState("")
  const [tools, setTools] = useState([
    {
      toolName: "ChatGPT Team",
      monthlyCost: ""
    }
  ])

  function addTool() {
    setTools([
      ...tools,
      {
        toolName: "ChatGPT Team",
        monthlyCost: ""
      }
    ])
  }

  function updateTool(index, field, value) {
    const next = [...tools]
    next[index][field] = value
    setTools(next)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const res = await fetch("/api/audits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        companyName,
        tools: tools.map((tool) => ({
          ...tool,
          monthlyCost: Number(tool.monthlyCost)
        }))
      })
    })

    const data = await res.json()

    if (data.slug) {
      router.push(`/audit/${data.slug}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Company name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>
        {tools.map((tool, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px"
            }}
          >
            <select
              value={tool.toolName}
              onChange={(e) =>
                updateTool(index, "toolName", e.target.value)
              }
            >
              {TOOL_OPTIONS.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>

            <input
              placeholder="Monthly cost"
              value={tool.monthlyCost}
              onChange={(e) =>
                updateTool(index, "monthlyCost", e.target.value)
              }
            />
          </div>
        ))}
      </div>

      <button type="button" onClick={addTool}>
        Add tool
      </button>

      <button type="submit" style={{ marginLeft: "10px" }}>
        Run Audit
      </button>
    </form>
  )
}