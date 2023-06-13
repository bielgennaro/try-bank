const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const { Pool } = require("pg");

const pool = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: 5432, // Porta padrão do PostgreSQL
});

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
