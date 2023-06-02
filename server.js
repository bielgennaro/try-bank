const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/usuarios", usuarioRoutes);

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;
