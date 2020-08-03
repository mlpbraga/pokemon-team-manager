const _ = require('lodash');

const UsersResponseFormatter = {
  single: (user) => _.omit(user.dataValues, ['password']),
};

module.exports = UsersResponseFormatter;
