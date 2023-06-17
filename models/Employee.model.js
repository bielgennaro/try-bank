const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createEmployee = async (data) => {
  return prisma.employee.create({ data });
};

const getEmployees = async () => {
  return prisma.employee.findMany({ include: { employer: true } });
};

const getEmployeeById = async (id) => {
  return prisma.employee.findUnique({ where: { id }, include: { employer: true } });
};

const updateEmployee = async (id, data) => {
  return prisma.employee.update({ where: { id }, data, include: { employer: true } });
};

const deleteEmployee = async (id) => {
  return prisma.employee.delete({ where: { id } });
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
