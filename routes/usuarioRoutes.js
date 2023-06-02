const express = require("express");
const UsuarioController = require("../controllers/usuarioController");

const route = express.Router();

route.get("/list", UsuarioController.list);
route.post("/login", UsuarioController.login);
route.post("/", UsuarioController.create);
route.put("/:id", UsuarioController.update);
route.delete("/:id", UsuarioController.delete);

module.exports = route;
