const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (userData) => {
  try {
    const user = await prisma.$queryRaw`
      INSERT INTO User (name, email)
      VALUES (${userData.name}, ${userData.email});
    `;
    return user;
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

const getUsers = async () => {
  try {
    const users = await prisma.$queryRaw`
      SELECT * FROM User;
    `;
    return users;
  } catch (error) {
    throw new Error(`Failed to retrieve users: ${error.message}`);
  }
};

const getUserById = async (userId) => {
  try {
    const user = await prisma.$queryRaw`
      SELECT * FROM User WHERE id = ${userId};
    `;
    return user;
  } catch (error) {
    throw new Error(`Failed to retrieve user: ${error.message}`);
  }
};

const updateUser = async (userId, userData) => {
  try {
    const user = await prisma.$queryRaw`
      UPDATE User
      SET name = ${userData.name}, email = ${userData.email}
      WHERE id = ${userId};
    `;
    return user;
  } catch (error) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await prisma.$queryRaw`
      DELETE FROM User WHERE id = ${userId};
    `;
    return user;
  } catch (error) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
