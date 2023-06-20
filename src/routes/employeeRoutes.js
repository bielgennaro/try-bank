const express = require('express')
const routes = express.Router()

const employeeController = require('../controllers/Employee.controller')

routes.get('/', employeeController.getEmployees)
routes.get('/:employeeId', employeeController.getEmployeeById)
routes.post('/register', employeeController.createEmployee)
routes.put('/update/:employeeId', employeeController.updateEmployee)
routes.delete('/delete/:employeeId', employeeController.deleteEmployee)

module.exports = routes
