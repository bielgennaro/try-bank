const express = require('express')
const antedeguemon = express.Router()

const userController = require('../controllers/User.controller')
const employeeController = require('../controllers/Employee.controller')
const employerController = require('../controllers/Employer.controller')

// Rotas para o modelo User //* Ok
antedeguemon.post('/create',userController.createUser)
antedeguemon.get('/list', userController.getUsers)
antedeguemon.get('/listById/:userId', userController.getUserById)
antedeguemon.put('/update/:userId', userController.updateUser)
antedeguemon.delete('/delete/:userId', userController.deleteUser)

// Rotas para o modelo Employee
antedeguemon.post('/register', employeeController.createEmployee)
antedeguemon.get('/listEmployees', employeeController.getEmployees)
antedeguemon.get('/listEmployeesById/:employeeId', employeeController.getEmployeeById)
antedeguemon.put('/updateEmployeesById/:employeeId', employeeController.updateEmployee)
antedeguemon.delete('/deleteEmployees/:employeeId', employeeController.deleteEmployee)

// Rotas para o modelo Employer
antedeguemon.post('/contract', employerController.createEmployer)
antedeguemon.get('/listEmployers', employerController.getEmployers)
antedeguemon.get('/listEmployersById/:employerId', employerController.getEmployerById)
antedeguemon.put('/updateEmployers/:employerId', employerController.updateEmployer)
antedeguemon.delete('/deleteEmployers/:employerId', employerController.deleteEmployer)

module.exports = antedeguemon
