const { Op } = require('sequelize');
const { db } = require('../models');

const { pokemons: Pokemons, pokemon_types: PokemonTypes } = db;

const PokemonsDAO = {
  readAllPokemons: async ({ name, type }) => {
    const where = {};

    if (name) {
      where.name = { [Op.like]: `%${name}%` };
    }

    const foundPokemon = await Pokemons.findAll({
      include: [
        { model: PokemonTypes, where: type ? { type } : {} },
      ],
      where,
    });

    const response = await Promise.all(foundPokemon.map(async (pokemon) => ({
      ...pokemon,
      types: await pokemon.getPokemon_types(),
    })));
    return response;
  },
};

module.exports = PokemonsDAO;
