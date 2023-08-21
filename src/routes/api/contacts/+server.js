import { sql } from '$lib/sql' 

export function GET({ locals }) {
	
	const res = await locals.db.query(
		sql`
		SELECT account_id, id, first_name, last_name, last_contacted, active, created_at, updated_at, contact_group_id,
		is_favorite, profile_url, birthday, company_department, company_name, company_title, maiden_name, middle_name,
		nick_name, notes, prefix, suffix from contacts
		`
	);

	console.log(res.rows);

	return json(res.rows);
}

