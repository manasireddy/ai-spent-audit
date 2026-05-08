export function generateRecommendations(audit) {
  const recommendations = []

  if (audit.overspend > 0) {
    recommendations.push(
      "Current spend is above estimated efficient benchmark."
    )
  }

  if (audit.overspend > 2000) {
    recommendations.push(
      "Review tool usage and consider reducing unused seats."
    )
  }

  if (audit.overspend === 0) {
    recommendations.push(
      "Current spend looks efficient for current usage."
    )
  }

  return recommendations
}