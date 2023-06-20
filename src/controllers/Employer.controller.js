const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createEmployer = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const employer = await prisma.employer.create({
      data: {
        name,
        email,
        password,
      },
    })
    res.status(201).json(employer)
  } catch (error) {
    res.status(500).json({ message: 'Empregador já registrado' })
  }
}

const getEmployers = async (req, res) => {
  try {
    const employers = await prisma.employer.findMany()
    res.json(employers)
  } catch (error) {
    res.status(500).json({ message: 'Nenhum empregador cadastrado' })
  }
}

const getEmployerById = async (req, res) => {
  try {
    const { employerId } = req.params
    const employer = await prisma.employer.findUnique({
      where: {
        id: Number(employerId),
      },
    })
    if (employer) {
      res.json(employer)
    } else {
      res.status(404).json({ message: 'Empregador não encotrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateEmployer = async (req, res) => {
  try {
    const { employerId } = req.params
    const { name, email, password } = req.body
    const employer = await prisma.employer.update({
      where: {
        id: Number(employerId),
      },
      data: {
        name,
        password,
        email,
      },
    })
    if (employer) {
      res.json(employer)
    } else {
      res.status(404).json({ message: 'Empregador não encotrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteEmployer = async (req, res) => {
  try {
    const { employerId } = req.params
    const employer = await prisma.employer.delete({
      where: {
        id: Number(employerId),
      },
    })
    if (employer) {
      res.json({ message: 'Empregador deletado com sucesso' })
    } else {
      res.status(404).json({ message: 'Empregador não encontrado.' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createEmployer,
  getEmployers,
  getEmployerById,
  updateEmployer,
  deleteEmployer,
}
