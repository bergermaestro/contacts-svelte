import { sql }  from '$lib/sql';
import { getContactGroups, getFavorites } from '$lib/db/contacts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {

	const contactGroups = await getContactGroups(locals.db);

	const favoriteContacts = await getFavorites(locals.db);

  return {
		contactGroups, favoriteContacts
  };
}
