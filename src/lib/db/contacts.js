import { sql } from '$lib/sql';
import { json } from '@sveltejs/kit';

export async function getContacts(dbconn, account_id=42) {

	const res = await dbconn.query(
		sql`
		SELECT account_id, id, first_name, last_name, last_contacted, active, created_at, updated_at, contact_group_id,
		is_favorite, profile_url, birthday, company_department, company_name, company_title, maiden_name, middle_name,
		nick_name, notes, prefix, suffix from contacts
		`
	);

	return res.rows; 
}

export async function getContactGroups(dbconn, account_id=42) {

	const res = await dbconn.query(
		sql`
		SELECT account_id, id, group_name, contact_frequency, color
		from contact_groups
		`
	);

	return res.rows;
}

export async function getUpcomingContacts(dbconn, account_id=42) {

	const res = await dbconn.query(
		sql`
		`
	);

	return res.rows;
}
