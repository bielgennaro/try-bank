const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createManager = async (managerData) => {
  try {
    const manager = await prisma.$queryRaw`
      INSERT INTO Manager (name, email, password)
      VALUES (${managerData.name}, ${managerData.email}, ${managerData.password});
    `
    return manager
  } catch (error) {
    throw new Error(`Falha ao registrar gerente: ${error.message}`)
  }
}

const getManager = async () => {
  try {
    const manager = await prisma.$queryRaw`
      SELECT * FROM Manager;
    `
    return manager
  } catch (error) {
    throw new Error(`Falha ao listar empregadores: ${error.message}`)
  }
}

const getManagerById = async (managerId) => {
  try {
    const manager = await prisma.$queryRaw`
      SELECT * FROM Manager WHERE id = ${managerId};
    `
    return manager
  } catch (error) {
    throw new Error(`Falha ao encontrar empregador: ${error.message}`)
  }
}

const updateManager = async (managerId, managerData) => {
  try {
    const manager = await prisma.$queryRaw`
      UPDATE Manager
      SET name = ${managerData.name}, email = ${managerData.email}, password = ${managerData.password}
      WHERE id = ${managerId};
      `
    return manager
  } catch (error) {
    console.log(error)
    throw new Error(`Falha ao atualizar gerente: ${error.message}`)
  }
}

const deleteManager = async (managerId) => {
  try {
    const manager = await prisma.$queryRaw`
      DELETE FROM Manager WHERE id = ${managerId};
    `
    return manager
  } catch (error) {
    throw new Error(`Falha ao deletar o gerente: ${error.message}`)
  }
}

module.exports = {
  createManager,
  getManager,
  getManagerById,
  updateManager,
  deleteManager,
}
