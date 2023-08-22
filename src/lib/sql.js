import { Pool } from 'pg';

const pool = new Pool({
	connectionString: 'postgresql://localhost/postgres'
})

export async function query(text, params, callback) {
	return pool.query(text, params, callback);
}


export function sql(strings, ...values) {
	return strings.join('');
}

