var express = require('express')
var antedeguemon = express.Router()

const userController = require('../controllers/User.controller')

antedeguemon.get('/', userController.getUsers)
antedeguemon.get('/list/:userId', userController.getUserById)
antedeguemon.post('/create',userController.createUser)
antedeguemon.put('/update/:userId', userController.updateUser)
antedeguemon.delete('/delete/:userId', userController.deleteUser)

module.exports = antedeguemon
