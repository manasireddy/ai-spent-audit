import Link from "next/link"

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>
        AI Spend Audit
      </h1>

      <p style={{ fontSize: "18px", maxWidth: "650px" }}>
        Analyze SaaS AI tool usage, compare spend against estimated efficient
        benchmarks, and generate shareable audit reports with recommendations.
      </p>

      <div style={{ marginTop: "28px" }}>
        <Link
          href="/audit/new"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            border: "1px solid #111",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Run AI Spend Audit
        </Link>
      </div>

      <div
        style={{
          marginTop: "48px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px"
        }}
      >
        <h3>What this does</h3>

        <ul>
          <li>Collects company AI tooling spend</li>
          <li>Benchmarks against expected efficient usage</li>
          <li>Calculates overspend</li>
          <li>Generates recommendations and summaries</li>
          <li>Creates shareable audit URLs</li>
        </ul>
      </div>
    </main>
  )
}