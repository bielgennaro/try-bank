let User = require('../../models/User')

const addUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const user = await User.create({ name, email, password })
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = addUser
