let express = require('express')
const { PrismaClient } = require('@prisma/client');


const port = 3000
const app = express()

// Middlewares do Express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Rotas
const Routes = require('./routes/Routes')
app.use('/users', Routes)
app.use('/employees', Routes)
app.use('/employers', Routes)

// Iniciando o servidor
app.listen(port, () => {
  console.log('Servidor rodando na porta 3000.')
})
