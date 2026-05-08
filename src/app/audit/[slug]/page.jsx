async function getAudit(slug) {
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/audits/${slug}`,
  {
    cache: "no-store"
  }
)

  if (!res.ok) {
    throw new Error("Audit not found")
  }

  return res.json()
}

function MetricCard({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        minWidth: "180px"
      }}
    >
      <p style={{ margin: 0, fontSize: "14px" }}>{title}</p>
      <h2 style={{ marginTop: "8px" }}>{value}</h2>
    </div>
  )
}

export default async function AuditPage({ params }) {
  const { slug } = await params
  const audit = await getAudit(slug)

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <h1>{audit.company_name}</h1>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "24px",
          flexWrap: "wrap"
        }}
      >
        <MetricCard
          title="Total Spend"
          value={`₹${audit.total_spend}`}
        />

        <MetricCard
          title="Expected Spend"
          value={`₹${audit.expected_spend}`}
        />

        <MetricCard
          title="Overspend"
          value={`₹${audit.overspend}`}
        />
      </div>

      <div
  style={{
    marginTop: "28px",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  }}
>
  <h3>Audit Summary</h3>
  <p>{audit.summary}</p>
</div>

      <div style={{ marginTop: "32px" }}>
        <h3>Recommendations</h3>

        <ul>
          {audit.recommendations?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}