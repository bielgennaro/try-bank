const { validationResult } = require("express-validator");
const UsuarioModel = require("../models/Usuario");

class UsuarioController {
	async list(req, res) {
		try {
			const usuarios = await UsuarioModel.findAll();
			res.json(usuarios);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "O PABLO É UM VIADINHOOOO." });
		}
	}

	async login(req, res) {
		const { email, senha } = req.body;
		const usuarioModel = new UsuarioModel();

		try {
			const user = await usuarioModel.findByEmailAndPassword(email, senha);

			if (user) {
				res.status(200).json({ message: "Login realizado com sucesso!" });
			} else {
				res.status(401).json({ message: "Credenciais inválidas!" });
			}
		} catch (error) {
			console.error("Erro ao realizar login:", error);
			res.status(500).json({ message: "Erro interno no servidor." });
		}
	}

	async create(req, res) {
		const { email, senha } = req.body;
		const usuarioModel = new UsuarioModel();

		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}

			await usuarioModel.create(email, senha);
			res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
		} catch (error) {
			console.error("Erro ao cadastrar usuário:", error);
			res.status(500).json({ message: "Erro interno no servidor." });
		}
	}

	async update(req, res) {
		const { id } = req.params;
		const { email, senha } = req.body;
		const usuarioModel = new UsuarioModel();

		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}

			await usuarioModel.update(id, email, senha);
			res.status(200).json({ message: "Usuário atualizado com sucesso!" });
		} catch (error) {
			console.error("Erro ao atualizar usuário:", error);
			res.status(500).json({ message: "Erro interno no servidor." });
		}
	}

	async delete(req, res) {
		const { id } = req.params;
		const usuarioModel = new UsuarioModel();

		try {
			await usuarioModel.delete(id);
			res.status(200).json({ message: "Usuário excluído com sucesso!" });
		} catch (error) {
			console.error("Erro ao excluir usuário:", error);
			res.status(500).json({ message: "Erro interno no servidor." });
		}
	}
}

module.exports = new UsuarioController();
