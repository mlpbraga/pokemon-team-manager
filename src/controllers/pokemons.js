const PokemonsDAO = require('../database/dao/pokemons');
const pokemonsResponseFormatter = require('../formatters/response/pokemons');

const pokemonsController = {
  index: async (req, res) => {
    const pokemons = await PokemonsDAO.readAllPokemons();
    const response = pokemonsResponseFormatter.list(pokemons);
    return res.json(response);
  },
};

module.exports = pokemonsController;
