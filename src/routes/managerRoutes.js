const express = require('express')
const routes = express.Router()

const managerController = require('../controllers/Manager.controller')

routes.get('/', managerController.getManager)
routes.get('/list/:managerId', managerController.getManagerById)
routes.post('/register', managerController.createManager)
routes.put('/update/:managerId', managerController.updateManager)
routes.delete('/delete/:managerId', managerController.deleteManager)

module.exports = routes
