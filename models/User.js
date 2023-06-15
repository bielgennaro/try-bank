const mysql = require('mysql')

// Configurações da conexão do banco de dados
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'mysql',
  port: 3000,
}
// Criação do pool de conexões
const pool = mysql.createPool(dbConfig)

const User = {
  async create({ name, email, password }) {
    try {
      const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *'
      const values = [name, email, password]
      console.log(pool)
      const result = await pool.query(query, values)
      return result.rows[0]
    } catch (error) {
      console.log(error)
      throw error
    }
  },

  async findOne({ email, password }) {
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2'
    const values = [email, password]

    try {
      const result = await pool.query(query, values)
      return result.rows[0]
    } catch (error) {
      throw error
    }
  },

  async findAll() {
    const query = 'SELECT * FROM users'

    try {
      const result = await pool.query(query)
      return result.rows
    } catch (error) {
      throw error
    }
  },

  async update(id, { name, email, password }) {
    const query = 'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *'
    const values = [name, email, password, id]

    try {
      const result = await pool.query(query, values)
      return result.rows[0]
    } catch (error) {
      throw error
    }
  },

  async delete(id) {
    const query = 'DELETE FROM users WHERE id = $1'
    const values = [id]

    try {
      await pool.query(query, values)
    } catch (error) {
      throw error
    }
  },
}

module.exports = User
