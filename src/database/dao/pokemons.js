const { db } = require('../models');

const { pokemons: Pokemons, pokemon_types: PokemonTypes } = db;

const PokemonsDAO = {
  readAllPokemons: async () => {
    const response = await Pokemons.findAll({
      include: [
        { model: PokemonTypes },
      ],
    });
    return response;
  },
};

module.exports = PokemonsDAO;
