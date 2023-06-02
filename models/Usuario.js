class UsuarioModel {
	async findByEmailAndPassword(email, senha) {
		try {
			const query = "SELECT * FROM usuarios WHERE email = $1 AND senha = $2";
			const values = [email, senha];
			const result = await pool.query(query, values);
			return result.rows[0];
		} catch (error) {
			console.error("Erro ao buscar usuário:", error);
			throw error;
		}
	}

	async create(email, senha) {
		try {
			const query =
				"INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)";
			const values = [email, senha];
			await pool.query(query, values);
		} catch (error) {
			console.error("Erro ao criar usuário:", error);
			throw error;
		}
	}

	async update(id, email, senha) {
		try {
			const query =
				"UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4";
			const values = [email, senha, id];
			await pool.query(query, values);
		} catch (error) {
			console.error("Erro ao atualizar usuário:", error);
			throw error;
		}
	}

	async delete(id) {
		try {
			const query = "DELETE FROM usuarios WHERE id = $1";
			const values = [id];
			await pool.query(query, values);
		} catch (error) {
			console.error("Erro ao excluir usuário:", error);
			throw error;
		}
	}
}

module.exports = UsuarioModel;
