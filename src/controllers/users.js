const UsersDAO = require('../database/dao/users');
const UsersResponseFormatter = require('../formatters/response/users');

const usersController = {
  show: async (req, res) => {
    const { id } = req.params;
    const user = await UsersDAO.readId(id);
    const response = UsersResponseFormatter.single(user);
    return res.json(response);
  },
  create: async (req, res) => {
    const { name, email, password } = req.body;
    const user = await UsersDAO.create({ name, email, password });
    const response = UsersResponseFormatter.single(user);
    return res.json(response);
  },
};

module.exports = usersController;
