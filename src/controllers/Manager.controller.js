const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createManager = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const manager = await prisma.manager.create({
      data: {
        name,
        email,
        password,
      },
    })
    res.status(201).json(manager)
  } catch (error) {
    res.status(500).json({ message: 'Gerente já registrado' })
  }
}

const getManager = async (req, res) => {
  try {
    const manager = await prisma.manager.findMany()
    res.json(manager)
  } catch (error) {
    res.status(500).json({ message: 'Nenhum gerente cadastrado' })
  }
}

const getManagerById = async (req, res) => {
  try {
    const { managerId } = req.params
    const manager = await prisma.manager.findUnique({
      where: {
        id: Number(managerId),
      },
    })
    if (manager) {
      res.json(manager)
    } else {
      res.status(404).json({ message: 'Gerente não encotrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateManager = async (req, res) => {
  try {
    const { managerId } = req.params
    const { name, email, password } = req.body
    const manager = await prisma.manager.update({
      where: {
        id: Number(managerId),
      },
      data: {
        name,
        password,
        email,
      },
    })
    if (manager) {
      res.json(manager)
    } else {
      res.status(404).json({ message: 'Gerente não encotrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteManager = async (req, res) => {
  try {
    const { managerId } = req.params
    const manager = await prisma.manager.delete({
      where: {
        id: Number(managerId),
      },
    })
    if (manager) {
      res.json({ message: 'Gerente deletado com sucesso' })
    } else {
      res.status(404).json({ message: 'Gerente não encontrado.' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createManager,
  getManager,
  getManagerById,
  updateManager,
  deleteManager,
}
