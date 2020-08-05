const { hashSync } = require('bcryptjs');
const { db } = require('../models');
const AppError = require('../../commons/erros/AppError');

const { users: Users } = db;

const UsersDAO = {
  readId: async (id) => {
    const foundUser = await Users.findByPk(id);
    if (!foundUser) {
      throw new AppError('User not found.', 400)
    }
    return foundUser;
  },
  create: async ({ name, email, password }) => {
    const notAvailiableMail = await Users.findOne({ where: { email } });

    if (notAvailiableMail) {
      throw new Error('Email already in use.');
    }

    const newUser = await Users.create({
      name,
      email,
      password: await hashSync(password),
    });
    return newUser;
  },
};

module.exports = UsersDAO;
