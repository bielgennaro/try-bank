import { Client } from "pg";
import { config } from "dotenv";

config();

const connectDb = async () => {
	try {
		const client = new Client({
			user: process.env.PGUSER,
			host: process.env.PGHOST,
			database: process.env.PGDATABASE,
			password: process.env.PGPASSWORD,
			port: process.env.PGPORT,
		});

		await client.connect();
		await client.end();
	} catch (error) {
		console.log(error);
	}
};

connectDb();
