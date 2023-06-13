const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

// Middlewares do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas
const Routes = require("./routes/Routes");
app.use("/users", Routes);

// Iniciando o servidor
app.listen(3000, () => {
	console.log("Servidor rodando na porta 3000.");
});
