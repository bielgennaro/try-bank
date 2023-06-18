const express = require('express')
const antedeguemon = express.Router()

const userController = require('../controllers/User.controller')
const employeeController = require('../controllers/Employee.controller')
const employerController = require('../controllers/Employer.controller')

// Rotas para o modelo User //* Ok
antedeguemon.get('/list', userController.getUsers)
antedeguemon.get('/listById/:userId', userController.getUserById)
antedeguemon.post('/create',userController.createUser)
antedeguemon.put('/update/:userId', userController.updateUser)
antedeguemon.delete('/delete/:userId', userController.deleteUser)

// Rotas para o modelo Employee //* Ok
antedeguemon.get('/listEmployees', employeeController.getEmployees)
antedeguemon.get('/listEmployeesById/:employeeId', employeeController.getEmployeeById)
antedeguemon.post('/register', employeeController.createEmployee)
antedeguemon.put('/updateEmployees/:employeeId', employeeController.updateEmployee)
antedeguemon.delete('/deleteEmployees/:employeeId', employeeController.deleteEmployee)

// Rotas para o modelo Employer //* Ok
antedeguemon.get('/listEmployers', employerController.getEmployers)
antedeguemon.get('/listEmployersById/:employerId', employerController.getEmployerById)
antedeguemon.post('/contract', employerController.createEmployer)
antedeguemon.put('/updateEmployers/:employerId', employerController.updateEmployer)
antedeguemon.delete('/deleteEmployers/:employerId', employerController.deleteEmployer)

module.exports = antedeguemon
