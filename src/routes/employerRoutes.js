var express = require('express')
var antedeguemon = express.Router()

const employerController = require('../controllers/Employer.controller')

antedeguemon.get('/', employerController.getEmployers)
antedeguemon.get('/list/:employerId', employerController.getEmployerById)
antedeguemon.post('/contract', employerController.createEmployer)
antedeguemon.put('/update/:employerId', employerController.updateEmployer)
antedeguemon.delete('/delete/:employerId', employerController.deleteEmployer)

module.exports = antedeguemon
