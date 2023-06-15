const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// Rota para registro de usuário
router.post('/register', userController.register)

// Rota para login de usuário
router.post('/login', userController.login)

// Rota para listar usuários
router.get('/list', userController.list)

// Rota para atualizar um usuário
router.put('/update/:id', userController.update)

// Rota para deletar um usuário
router.delete('/delete/:id', userController.delete)

module.exports = router
