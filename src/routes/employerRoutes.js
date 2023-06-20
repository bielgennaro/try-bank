const express = require('express')
const routes = express.Router()

const employerController = require('../controllers/Employer.controller')

routes.get('/', employerController.getEmployers)
routes.get('/:employerId', employerController.getEmployerById)
routes.post('/contract', employerController.createEmployer)
routes.put('/update/:employerId', employerController.updateEmployer)
routes.delete('/delete/:employerId', employerController.deleteEmployer)

module.exports = routes
