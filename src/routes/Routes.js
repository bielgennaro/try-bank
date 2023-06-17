const express = require('express')
const router = express.Router()

const userController = require('../controllers/User.controller')
const employeeController = require('../controllers/Employee.controller')
const employerController = require('../controllers/Employer.controller')

// Rotas para o modelo User
router.post('/create', userController.createUser)
router.get('/list', userController.getUsers)
router.get('/listById/:userId', userController.getUserById)
router.put('/update/:userId', userController.updateUser)
router.delete('/delete/:userId', userController.deleteUser)

// Rotas para o modelo Employee
router.post('/employees', employeeController.createEmployee)
router.get('/employees', employeeController.getEmployees)
router.get('/employees/:employeeId', employeeController.getEmployeeById)
router.put('/employees/:employeeId', employeeController.updateEmployee)
router.delete('/employees/:employeeId', employeeController.deleteEmployee)

// Rotas para o modelo Employer
router.post('/employers', employerController.createEmployer)
router.get('/employers', employerController.getEmployers)
router.get('/employers/:employerId', employerController.getEmployerById)
router.put('/employers/:employerId', employerController.updateEmployer)
router.delete('/employers/:employerId', employerController.deleteEmployer)

module.exports = router
