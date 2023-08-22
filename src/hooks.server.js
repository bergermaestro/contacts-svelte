import { Client } from 'pg'

/** @type {import('@sveltejs/kit').Handle} */
	export async function handle({ event, resolve }) {

		/*
		const client = new Client({
			host: 'localhost',
			port: 5432,
			database: 'postgres',
			user: 'matthew',
		})
		*/

		/*
		const client = new Client({
			connectionString: 'postgresql://localhost/postgres'
		})

		await client.connect();
		event.locals.db = client;
		*/

		const response = await resolve(event);
		
		//await client.end();

		return response;
	}
