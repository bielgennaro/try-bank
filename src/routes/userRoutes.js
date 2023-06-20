const express = require('express')
const routes = express.Router()

const userController = require('../controllers/User.controller')

routes.get('/', userController.getUsers)
routes.get('/:userId', userController.getUserById)
routes.post('/create', userController.createUser)
routes.put('/update/:userId', userController.updateUser)
routes.delete('/delete/:userId', userController.deleteUser)

module.exports = routes
