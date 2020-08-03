const _ = require('lodash');

const PokemonsResponseFormatter = {
  list: (pokemons) => {
    const formattedResponse = pokemons.map((pokemon) => {
      const tempPokemon = _.omit(pokemon.dataValues, ['pokemon_types']);
      return {
        ...tempPokemon,
        types: pokemon.types.map((type) => type.type),
      };
    });
    return formattedResponse;
  },
};

module.exports = PokemonsResponseFormatter;
