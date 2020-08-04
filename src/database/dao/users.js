const { hashSync } = require('bcryptjs');
const { db } = require('../models');

const { users: Users } = db;

const UsersDAO = {
  readId: async (id) => {
    const foundUser = await Users.findByPk(id);
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
