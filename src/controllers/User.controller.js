const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Usuário ja cadastrado' })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Nenhum usuário cadastrado' })
  }
}

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    })
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params
    const { email, name, password } = req.body
    const user = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        email,
        name,
        password,
      },
    })
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    })
    if (user) {
      res.json({ message: 'Usuário deletado com sucesso.' })
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
}
