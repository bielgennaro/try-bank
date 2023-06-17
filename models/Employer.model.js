const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EmployerModel {
  async createEmployer(employerData) {
    try {
      const query = `
        INSERT INTO Employer (column1, column2, ...) -- Substitua "column1, column2, ..." pelos nomes das colunas da tabela Employer
        VALUES ($1, $2, ...); -- Substitua "$1, $2, ..." pelos valores correspondentes
      `;
      const params = [...Object.values(employerData)]; // Obtém os valores dos campos do objeto employerData
      await prisma.$queryRaw(query, ...params);
      return employerData;
    } catch (error) {
      throw new Error(`Failed to create employer: ${error.message}`);
    }
  }

  async getEmployers() {
    try {
      const query = `
        SELECT * FROM Employer; -- Substitua "*" pelos nomes das colunas que deseja retornar
      `;
      const employers = await prisma.$queryRaw(query);
      return employers;
    } catch (error) {
      throw new Error(`Failed to retrieve employers: ${error.message}`);
    }
  }

  async getEmployerById(employerId) {
    try {
      const query = `
        SELECT * FROM Employer WHERE id = $1; -- Substitua "id" pelo nome da coluna que representa o ID
      `;
      const employer = await prisma.$queryRaw(query, employerId);
      return employer[0];
    } catch (error) {
      throw new Error(`Failed to retrieve employer: ${error.message}`);
    }
  }

  async updateEmployer(employerId, employerData) {
    try {
      const query = `
        UPDATE Employer SET column1 = $1, column2 = $2, ... -- Substitua "column1, column2, ..." pelos nomes das colunas que deseja atualizar
        WHERE id = $3; -- Substitua "id" pelo nome da coluna que representa o ID
      `;
      const params = [...Object.values(employerData), employerId];
      await prisma.$queryRaw(query, ...params);
      return employerData;
    } catch (error) {
      throw new Error(`Failed to update employer: ${error.message}`);
    }
  }

  async deleteEmployer(employerId) {
    try {
      const query = `
        DELETE FROM Employer WHERE id = $1; -- Substitua "id" pelo nome da coluna que representa o ID
      `;
      await prisma.$queryRaw(query, employerId);
      return { id: employerId };
    } catch (error) {
      throw new Error(`Failed to delete employer: ${error.message}`);
    }
  }
}

module.exports = new EmployerModel();
