const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


 const createEmployer = async(employerData) => {
    try {
      const employer = await prisma.$queryRaw`
      INSERT INTO User (name, email)
      VALUES (${employerData.name}, ${employerData.email});
    `;
    return employer;
    } catch (error) {
      throw new Error(`Failed to create employer: ${error.message}`);
    }
  }

  const getEmployers = async () => {
    try {
      const employer = await prisma.$queryRaw`
      SELECT * FROM Employer;
    `;
    return employer;
    } catch (error) {
      throw new Error(`Failed to retrieve employers: ${error.message}`);
    }
  }

  const getEmployerById = async (employerId) => {
    try {
      const employer = await prisma.$queryRaw`
      SELECT * FROM Employer WHERE id = ${employerId};
    `;
      return employer;
    } catch (error) {
      throw new Error(`Failed to retrieve employer: ${error.message}`);
    }
  }

  const updateEmployer = async(employerId, employerData) => {
    try {
      const employer = await prisma.$queryRaw`
      UPDATE Employer
      SET name = ${employerData.name}, email = ${employerData.email}
      WHERE id = ${employerId};
      `;
      return employer;
    } catch (error) {
      throw new Error(`Failed to update employer: ${error.message}`);
    }
  }

 const deleteEmployer = async(employerId) => {
    try {
      const employer = await prisma.$queryRaw`
      DELETE FROM Employer WHERE id = ${employerId};
    `;
      return employer;
    } catch (error) {
      throw new Error(`Failed to delete employer: ${error.message}`);
    }
  }

module.exports = {
  createEmployer,
  getEmployers,
  getEmployerById,
  updateEmployer,
  deleteEmployer,
}
