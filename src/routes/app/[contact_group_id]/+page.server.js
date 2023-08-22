import { getContacts, getUpcomingContacts } from '$lib/db/contacts';

export async function load({ locals, params }) {

	const contacts = await getContacts(null, null, params.contact_group_id);
	const upcomingContacts = await getUpcomingContacts(null, params.contact_group_id);

	console.log("contacts", contacts);
	console.log("params", params);

	return {
		slug: params.contact_group_id,
		contacts,
		upcomingContacts
	}
}
