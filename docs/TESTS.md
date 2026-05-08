Manual tests :

 -> Create audit from /audit/new
 -> Verify redirect to /audit/[slug]
 -> Verify audit persists in database
 -> Reload slug page and confirm report renders
 -> Test multiple tools
 -> Test empty cost defaults

Expected results :

 -> Successful save
 -> Correct totals
 -> Correct overspend
 -> Recommendations visible