const express = require('express')


const port = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const userRoutes = require('./routes/userRoutes')
const employeeRoutes = require('./routes/employeeRoutes')
const employerRoutes = require('./routes/employerRoutes')
app.use('/users', userRoutes)
app.use('/employees', employeeRoutes)
app.use('/employers', employerRoutes)

app.listen(port, () => {
  console.log('Ta daora chefe 😎👍, tamo na porta 3000.')
})
