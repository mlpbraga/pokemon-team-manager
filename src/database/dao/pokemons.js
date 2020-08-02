const { db } = require('../models');

const { pokemons: Pokemons } = db;

const PokemonsDAO = {
  readAllPokemons: async () => {
    const response = await Pokemons.findAll({});
    return response;
  },
};

module.exports = PokemonsDAO;
