const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


// Rota para registro de usuário
router.post("/register", userController.register);

// Rota para login de usuário
router.post("/login", userController.login);

// Rota para listar usuários
router.get("/", userController.list);

// Rota para atualizar um usuário
router.put("/:id", userController.update);

// Rota para deletar um usuário
router.delete("/:id", userController.delete);

module.exports = router;
