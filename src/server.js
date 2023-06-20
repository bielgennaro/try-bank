const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');

corsOption = {
  origin: '*',
}

const port = 3000
const app = express()

app.use(cookieParser());
app.use(cors(corsOption));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const userRoutes = require('./routes/userRoutes')
const employeeRoutes = require('./routes/employeeRoutes')
const employerRoutes = require('./routes/employerRoutes')
const managerRoutes = require('./routes/managerRoutes')
app.use('/users', userRoutes)
app.use('/employees', employeeRoutes)
app.use('/employers', employerRoutes)
app.use('/manager', managerRoutes)

app.listen(port, () => {
  console.log('Server running on port ' + port + '...')
})

module.exports = app
