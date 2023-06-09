const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createEmployee = async (req, res) => {
  try {
    const { name, email, isWorking, employerId } = req.body
    const employee = await prisma.employee.create({
      data: {
        name,
        email,
        isWorking,
        employerId: employerId ? Number(employerId) : undefined,
      },
    })
    res.status(201).json(employee)
  } catch (error) {
    res.status(500).json({ message: 'Funcionário já anexado a um empregador' })
  }
}

const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        Employer: true,
      },
    })
    res.json(employees)
  } catch (error) {
    res.status(500).json({ message: 'Nenhum funcionário cadastrado' })
  }
}

const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params
    const employee = await prisma.employee.findUnique({
      where: {
        id: Number(employeeId),
      },
      include: {
        Employer: true,
      },
    })
    if (employee) {
      res.json(employee)
    } else {
      res.status(404).json({ message: 'Funcionário não encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params
    const { name, email, isWorking, employerId } = req.body
    const employee = await prisma.employee.update({
      where: {
        id: Number(employeeId),
      },
      data: {
        name,
        email,
        isWorking,
        employerId: employerId ? Number(employerId) : undefined,
      },
      include: {
        Employer: true,
      },
    })
    if (employee) {
      res.json(employee)
    } else {
      res.status(404).json({ message: 'Funcionário não encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params
    const employee = await prisma.employee.delete({
      where: {
        id: Number(employeeId),
      },
    })
    if (employee) {
      res.json({ message: 'Funcionário deletado com sucesso' })
    } else {
      res.status(404).json({ message: 'Funcionário não encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
}
