const PokemonsDAO = require('../database/dao/pokemons');
const pokemonsResponseFormatter = require('../formatters/response/pokemons');

const pokemonsController = {
  index: async (req, res) => {
    const params = req.query;
    const pokemons = await PokemonsDAO.read(params);
    const response = pokemonsResponseFormatter.list(pokemons);
    return res.json(response);
  },
};

module.exports = pokemonsController;
