const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createEmployer = async (data) => {
  return prisma.employer.create({ data });
};

const getEmployers = async () => {
  return prisma.employer.findMany();
};

const getEmployerById = async (id) => {
  return prisma.employer.findUnique({ where: { id } });
};

const updateEmployer = async (id, data) => {
  return prisma.employer.update({ where: { id }, data });
};

const deleteEmployer = async (id) => {
  return prisma.employer.delete({ where: { id } });
};

module.exports = {
  createEmployer,
  getEmployers,
  getEmployerById,
  updateEmployer,
  deleteEmployer,
};
