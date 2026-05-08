export function generateSummary(audit) {
  if (audit.overspend > 0) {
    return `Current monthly AI spend is ₹${audit.actualSpend}, which is above the estimated efficient benchmark of ₹${audit.expectedSpend}. The audit indicates an overspend of ₹${audit.overspend}. Reviewing tool usage and consolidating underused subscriptions could reduce costs.`
  }

  return `Current monthly AI spend is ₹${audit.actualSpend}. This is aligned with the estimated efficient benchmark. Current usage appears cost-efficient for the selected tooling mix.`
}