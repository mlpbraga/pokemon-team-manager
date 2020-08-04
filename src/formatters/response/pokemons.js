const _ = require('lodash');

const PokemonsResponseFormatter = {
  list: (pokemons) => {
    const formattedResponse = pokemons.map((pokemon) => {
      const tempPokemon = _.omit(pokemon.dataValues, ['pokemon_types']);
      return {
        ...tempPokemon,
        types: pokemon.types
          ? pokemon.types.map((type) => type.type)
          : pokemon.pokemon_types.map((type) => type.type),
      };
    });
    return formattedResponse;
  },
};

module.exports = PokemonsResponseFormatter;
