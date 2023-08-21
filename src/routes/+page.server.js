import { sql } from '$lib/sql';
import { getContacts, getContactGroups } from '$lib/db/contacts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {

	console.log("load function running");

	//const responseData = await getContacts(locals.db).then(response => response.json());
	const response = await getContacts(locals.db);

	const contactGroups = await getContactGroups(locals.db);

	//console.log("RESPONSE", response);

	//const responseData = await response.json();

	//console.log("RESPONSEDATA", responseData);

  return {
		response: response,
		contactGroups
  };
}


export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		
		console.log("formData", data);

		console.log("request", request);

		//db.createTodo(cookies.get('userid'), data.get('description'));
		//

	}
};
