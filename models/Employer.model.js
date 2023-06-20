const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createEmployer = async (employerData) => {
  try {
    const employer = await prisma.$queryRaw`
      INSERT INTO Employer (name, email, password)
      VALUES (${employerData.name}, ${employerData.email}, ${employerData.password});
    `
    return employer
  } catch (error) {
    throw new Error(`Falha ao criar empregador: ${error.message}`)
  }
}

const getEmployers = async () => {
  try {
    const employer = await prisma.$queryRaw`
      SELECT * FROM Employer;
    `
    return employer
  } catch (error) {
    throw new Error(`Falha ao listar empregadores: ${error.message}`)
  }
}

const getEmployerById = async (employerId) => {
  try {
    const employer = await prisma.$queryRaw`
      SELECT * FROM Employer WHERE id = ${employerId};
    `
    return employer
  } catch (error) {
    throw new Error(`Falha ao encontrar empregador: ${error.message}`)
  }
}

const updateEmployer = async (employerId, employerData) => {
  try {
    const employer = await prisma.$queryRaw`
      UPDATE Employer
      SET name = ${employerData.name}, email = ${employerData.email}, password = ${employerData.password}
      WHERE id = ${employerId};
      `
    console.log(employer)
    return employer
  } catch (error) {
    console.log(error)
    throw new Error(`Falha ao atualizar empregador: ${error.message}`)
  }
}

const deleteEmployer = async (employerId) => {
  try {
    const employer = await prisma.$queryRaw`
      DELETE FROM Employer WHERE id = ${employerId};
    `
    return employer
  } catch (error) {
    throw new Error(`Falha ao deletar o empregador: ${error.message}`)
  }
}

module.exports = {
  createEmployer,
  getEmployers,
  getEmployerById,
  updateEmployer,
  deleteEmployer,
  createAdm,
}
