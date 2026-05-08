Frontend pages collect audit input and render reports.

Next.js API routes implement backend logic.

Supabase stores audit records.

Request flow

User submits form → POST /api/audits → calculate audit → save to database → redirect to /audit/[slug] → GET /api/audits/[slug] → render report.

Main routes

 -> /landing page
 -> /audit/new create audit
 -> /audit/[slug] report page
 -> /api/audits create audit
 -> /api/audits/[slug] fetch audit