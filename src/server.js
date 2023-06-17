const express = require('express')


const port = 3000
const app = express()

// Middlewares do Express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Rotas
const Antedeguemon = require('./routes/Routes')
app.use('/users', Antedeguemon)
app.use('/employees', Antedeguemon)
app.use('/employers', Antedeguemon)

// Iniciando o servidor
app.listen(port, () => {
  console.log('Ta daora chefe 😎👍.')
})
