const TeamsDAO = require('../database/dao/teams');
const TeamsResponseFormatter = require('../formatters/response/teams');

const teamsController = {
  create: async (req, res) => {
    const { name, trainerId, pokemons } = req.body;
    const team = await TeamsDAO.create({ name, trainerId, pokemons });
    const response = TeamsResponseFormatter.single(team);
    return res.json(response);
  },
};

module.exports = teamsController;
