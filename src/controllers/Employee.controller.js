const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createEmployee = async (req, res) => {
  try {
    const { name, isWorking, employerId, commission, email } = req.body;
    const employee = await prisma.employee.create({
      data: {
        name,
        isWorking,
        email,
        employer: {
          connect: { id: Number(employerId) },
        },
        commission,
      },
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      include: {
        Employer: true,
      },
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await prisma.employee.findUnique({
      where: {
        id: Number(employeeId),
      },
      include: {
        employer: true,
      },
    });
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { name, isWorking, employerId, commission } = req.body;
    const employee = await prisma.employee.update({
      where: {
        id: Number(employeeId),
      },
      data: {
        name,
        isWorking,
        Employer: {
          connect: { id: Number(employerId) },
        },
        commission,
      },
      include: {
        employer: true,
      },
    });
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await prisma.employee.delete({
      where: {
        id: Number(employeeId),
      },
    });
    if (employee) {
      res.json({ message: 'Employee deleted successfully' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
