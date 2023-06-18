const createEmployee = async (req, res) => {
  const { name, isWorking, employerId, email } = req.body;

  try {
    const newEmployee = await prisma.$queryRaw(`
      INSERT INTO "Employee" ("name", "isWorking", "employer_id", "email")
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `, [name, isWorking, employerId, email]);

    res.json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar um novo funcionário.' });
  }
};


const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.$queryRaw(`
      SELECT * FROM "Employee"
    `);

    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os funcionários.' });
  }
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await prisma.$queryRaw(`
      SELECT * FROM "Employee"
      WHERE "id" = $1
    `, [id]);

    if (employee.length === 0) {
      return res.status(404).json({ error: 'Funcionário não encontrado.' });
    }

    res.json(employee[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o funcionário.' });
  }
};

const updateEmployee = async (req, res) => {
  const { employeeId } = req.params;
  const { name, isWorking, employerId, commission, email } = req.body;

  try {
    const updatedEmployee = await prisma.$queryRaw(`
      UPDATE "Employee"
      SET "name" = $1, "isWorking" = $2, "employer_id" = $3, "commission" = $4, "email" = $5
      WHERE "id" = $6
      RETURNING *
    `, [name, isWorking, employerId, commission, email, employeeId]);

    if (updatedEmployee.length === 0) {
      return res.status(404).json({ error: 'Funcionário não encontrado.' });
    }

    res.json(updatedEmployee[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o funcionário.' });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.$queryRaw(`
      DELETE FROM "Employee"
      WHERE "id" = $1
    `, [id]);

    res.json({ message: 'Funcionário excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o funcionário.' });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
