const { hashSync } = require('bcryptjs');
const usersJSON = require('./users.json');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'users',
    usersJSON.users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      password: hashSync(user.password),
      created_at: new Date(),
      updated_at: new Date(),
    })),
  ),
  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
