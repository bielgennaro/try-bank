const { Pool } = require("pg");

const pool = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: 5432, // Porta padrão do PostgreSQL
});

const User = {
	async create({ name, email, password }) {
		const query =
			"INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
		const values = [name, email, password];

		try {
			const result = await pool.query(query, values);
			return result.rows[0];
		} catch (error) {
			throw error;
		}
	},

	async findOne({ email, password }) {
		const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
		const values = [email, password];

		try {
			const result = await pool.query(query, values);
			return result.rows[0];
		} catch (error) {
			throw error;
		}
	},

	async findAll() {
		const query = "SELECT * FROM users";

		try {
			const result = await pool.query(query);
			return result.rows;
		} catch (error) {
			throw error;
		}
	},

	async update(id, { name, email, password }) {
		const query =
			"UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *";
		const values = [name, email, password, id];

		try {
			const result = await pool.query(query, values);
			return result.rows[0];
		} catch (error) {
			throw error;
		}
	},

	async delete(id) {
		const query = "DELETE FROM users WHERE id = $1";
		const values = [id];

		try {
			await pool.query(query, values);
		} catch (error) {
			throw error;
		}
	},
};

module.exports = User;
