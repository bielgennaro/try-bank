const createEmployee = async (req, res) => {
  try {
    const { name, isWorking, employerId, commission, email } = req.body;

    const sql = `
      INSERT INTO Employee (name, isWorking, email, employerId, commission)
      VALUES (?, ?, ?, ?, ?)
    `;
    const params = [name, isWorking, email, employerId, commission];

    await prisma.$queryRaw(sql, params);

    const selectSql = `
      SELECT e.*, em.*
      FROM Employee e
      LEFT JOIN Employer em ON e.employerId = em.id
      WHERE e.id = ?
    `;

    const row = await prisma.$queryRaw(selectSql, [prisma.$queryRaw.lastInsertId()]);

    res.status(201).json(row[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployees = async (req, res) => {
  try {
    const sql = `
      SELECT e.*, em.*
      FROM Employee e
      LEFT JOIN Employer em ON e.employerId = em.id
    `;

    const rows = await prisma.$queryRaw(sql);

    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const sql = `
      SELECT e.*, em.*
      FROM Employee e
      LEFT JOIN Employer em ON e.employerId = em.id
      WHERE e.id = ?
    `;

    const row = await prisma.$queryRaw(sql, [employeeId]);

    if (row.length > 0) {
      res.json(row[0]);
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

    const sql = `
      UPDATE Employee
      SET name = ?, isWorking = ?, employerId = ?, commission = ?
      WHERE id = ?
    `;
    const params = [name, isWorking, employerId, commission, employeeId];

    await prisma.$queryRaw(sql, params);

    const selectSql = `
      SELECT e.*, em.*
      FROM Employee e
      LEFT JOIN Employer em ON e.employerId = em.id
      WHERE e.id = ?
    `;

    const row = await prisma.$queryRaw(selectSql, [employeeId]);

    if (row.length > 0) {
      res.json(row[0]);
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

    const sql = `
      DELETE FROM Employee
      WHERE id = ?
    `;

    await prisma.$queryRaw(sql, [employeeId]);

    if (prisma.$queryRaw.affectedRows() > 0) {
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
