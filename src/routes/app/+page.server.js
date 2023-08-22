import { sql, query } from '$lib/sql';
import { getContacts, getContactGroups, getUpcomingContacts } from '$lib/db/contacts';

/** @type {import('./$types').PageServerLoad} */
	export async function load({ locals }) {

		const contacts = await getContacts();
		const contactGroups = await getContactGroups();
		const upcomingContacts = await getUpcomingContacts();

		return {
			contacts,
			contactGroups,
			upcomingContacts
		};
	}


export const actions = {
	updateContact: async ({ cookies, request }) => {

		const data = await request.formData();

		console.log("formData", data);

		const id = data.get("id");
		const first_name = data.get("first_name");
		const last_name = data.get("last_name");

		if(id) { // update

			const res = await query(
				sql`UPDATE contacts SET first_name=$2, last_name=$3 
				WHERE id=$1
				`,
				[id, first_name, last_name]
			);

		} else { // insert

			const res = await query(
				sql`INSERT into contacts(first_name, last_name) values ($1, $2)`,
				[first_name, last_name]
			);

			console.log("res", res.rows);
		}
	},

	resetReachOut: async ({ request }) => {
		const data = await request.formData();

		const id = data.get("id");

		await query(sql`UPDATE contacts SET last_contacted = CURRENT_DATE where id = $1`, [id]);
	}
};
