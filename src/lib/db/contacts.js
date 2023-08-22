import { sql, query } from '$lib/sql';
import { json } from '@sveltejs/kit';

export async function getContacts(account_id=42, contact_id=null, contact_group_id=null) {
	
	const res = await query(
		sql`
		SELECT account_id, id, first_name, last_name, last_contacted, active, created_at, updated_at, contact_group_id,
		is_favorite, profile_url, birthday, company_department, company_name, company_title, maiden_name, middle_name,
		nick_name, notes, prefix, suffix from contacts
		WHERE
		((id = $1 and $1::uuid is not null) or $1::uuid is null) and
		((contact_group_id = $2 and $2::uuid is not null) or $2::uuid is null)
		`,
		[contact_id, contact_group_id]
	);

	return res.rows; 
}

export async function getFavorites(account_id=42) {

	const res = await query(
		sql`
		SELECT account_id, id, first_name, last_name, last_contacted, active, created_at, updated_at, contact_group_id,
		is_favorite, profile_url, birthday, company_department, company_name, company_title, maiden_name, middle_name,
		nick_name, notes, prefix, suffix from contacts
		WHERE
		is_favorite
		`
	);

	return res.rows
}

export async function getContactGroups(account_id=42) {

	const res = await query(
		sql`
		SELECT account_id, id, group_name, contact_frequency, color
		from contact_groups
		`
	);

	// need this because db returns PostgresInterval class
	const serialized_res = [];

	(res.rows).map(row => {
		const intervalObject = {...row};
		delete intervalObject.contact_frequency;
		intervalObject.contact_frequency = {};

		const postgresInterval = row.contact_frequency;

		for (const property in postgresInterval) {
			if (typeof postgresInterval[property] !== 'function') {
				intervalObject.contact_frequency[property] = postgresInterval[property];
			}
		}
		serialized_res.push(intervalObject);
	});

	console.log("serialized_res", serialized_res);

	return serialized_res;
}

export async function getUpcomingContacts(account_id=42, contact_group_id=null) {

	const res = await query(
		sql`
		select c.id, c.first_name, c.last_name, c.last_contacted + g.contact_frequency as next_contact 
		from contacts c join contact_groups g ON g.id = c.contact_group_id
		where((contact_group_id = $1 and $1::uuid is not null) or $1::uuid is null)
		order by c.last_contacted + g.contact_frequency - CURRENT_DATE asc 
		limit 7;
		`,
		[contact_group_id]
	);

	return res.rows;
}

