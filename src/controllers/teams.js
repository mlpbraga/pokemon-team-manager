const TeamsDAO = require('../database/dao/teams');
const TeamsResponseFormatter = require('../formatters/response/teams');

const teamsController = {
  create: async (req, res) => {
    const { name, trainerId, pokemons } = req.body;
    const team = await TeamsDAO.create({ name, trainerId, pokemons });
    const response = TeamsResponseFormatter.single(team);
    return res.json(response);
  },
  show: async (req, res) => {
    const { trainerId } = req.params;
    let teams;
    if (trainerId) teams = await TeamsDAO.readAll({ trainerId });
    else teams = await TeamsDAO.readAll({});
    const response = TeamsResponseFormatter.list(teams);
    return res.json(response);
  },
};

module.exports = teamsController;
