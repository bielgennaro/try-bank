const express = require('express')


const port = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const Routes = require('./routes/Routes')
app.use('/users', Routes)
app.use('/employees', Routes)
app.use('/employers', Routes)

app.listen(port, () => {
  console.log('Ta daora chefe 😎👍, tamo na porta 3000.')
})
