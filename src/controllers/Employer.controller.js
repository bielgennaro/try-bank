const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createEmployer = async (req, res) => {
  try {
    const { name } = req.body;
    const employer = await prisma.employer.create({
      data: {
        name,
      },
    });
    res.status(201).json(employer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployers = async (req, res) => {
  try {
    const employers = await prisma.employer.findMany();
    res.json(employers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployerById = async (req, res) => {
  try {
    const { employerId } = req.params;
    const employer = await prisma.employer.findUnique({
      where: {
        id: Number(employerId),
      },
    });
    if (employer) {
      res.json(employer);
    } else {
      res.status(404).json({ message: 'Employer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployer = async (req, res) => {
  try {
    const { employerId } = req.params;
    const { name } = req.body;
    const employer = await prisma.employer.update({
      where: {
        id: Number(employerId),
      },
      data: {
        name,
      },
    });
    if (employer) {
      res.json(employer);
    } else {
      res.status(404).json({ message: 'Employer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEmployer = async (req, res) => {
  try {
    const { employerId } = req.params;
    const employer = await prisma.employer.delete({
      where: {
        id: Number(employerId),
      },
    });
    if (employer) {
      res.json({ message: 'Employer deleted successfully' });
    } else {
      res.status(404).json({ message: 'Employer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEmployer,
  getEmployers,
  getEmployerById,
  updateEmployer,
  deleteEmployer,
};
