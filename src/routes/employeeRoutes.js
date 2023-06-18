var express = require('express')
var antedeguemon = express.Router()

const employeeController = require('../controllers/Employee.controller')

antedeguemon.get('/', employeeController.getEmployees)
antedeguemon.get('/list/:employeeId', employeeController.getEmployeeById)
antedeguemon.post('/register', employeeController.createEmployee)
antedeguemon.put('/update/:employeeId', employeeController.updateEmployee)
antedeguemon.delete('/delete/:employeeId', employeeController.deleteEmployee)

module.exports = antedeguemon
