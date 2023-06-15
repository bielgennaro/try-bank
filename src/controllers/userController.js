const User = require('../../models/User')

const userController = {
  register: async (req, res) => {
    const { name, email, password } = req.body

    try {
      const user = await User.create({ name, email, password })
      res.json(user)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao registrar usuário.' })
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body

    try {
      const user = await User.findOne({ email, password })
      if (!user) {
        res.status(401).json({ error: 'Usuário não encontrado.' })
      } else {
        res.json(user)
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao fazer login.' })
    }
  },

  list: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários.' })
    }
  },

  update: async (req, res) => {
    const { id, name, email, password } = req.body

    try {
      const updatedUser = await User.findByIdAndUpdate(id, { name, email, password }, { new: true })
      res.json(updatedUser)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário.' })
    }
  },

  delete: async (req, res) => {
    const { id } = req.params

    try {
      await User.findByIdAndDelete(id)
      res.json({ message: 'Usuário deletado com sucesso.' })
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar usuário.' })
    }
  },
}

module.exports = userController
