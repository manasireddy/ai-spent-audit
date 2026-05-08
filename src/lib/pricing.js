const PRICING = {
  "ChatGPT Team": 2000,
  "Claude Team": 2300,
  "Cursor": 1700,
  "GitHub Copilot": 900
}

export function calculateAudit(tools = []) {
  let actualSpend = 0
  let expectedSpend = 0

  const breakdown = tools.map((tool) => {
    const actual = Number(tool.monthlyCost || 0)
    const expected =
      (PRICING[tool.toolName] || 0) * Number(tool.seats || 1)

    actualSpend += actual
    expectedSpend += expected

    return {
      ...tool,
      actual,
      expected,
      delta: actual - expected
    }
  })

  return {
    breakdown,
    actualSpend,
    expectedSpend,
    overspend: Math.max(0, actualSpend - expectedSpend)
  }
}