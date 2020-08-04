const _ = require('lodash');
const UsersResponseFormatter = require('./users');
const PokemonsResponseFormatter = require('./pokemons');

const TeamResponseFormatter = {
  single: (team) => {
    const formattedTrainer = UsersResponseFormatter.single(team.trainer);
    const formattedPokemons = PokemonsResponseFormatter.list(team.pokemons);
    return ({
      ...team.dataValues,
      trainer: formattedTrainer,
      pokemons: formattedPokemons,
    });
  },
  list: (teams) => teams.map((team) => {
    const formattedTeam = _.omit(team.dataValues, ['team_pokemons']);
    const formattedPokemons = team.team_pokemons.map((pokemon) => ({
      ..._.omit(pokemon.dataValues.pokemon.dataValues, 'pokemon_types'),
      types: pokemon.dataValues
        .pokemon.dataValues
        .pokemon_types.map((type) => type.type),
    }));
    return ({
      ...formattedTeam,
      pokemons: formattedPokemons,
    });
  }),
};

module.exports = TeamResponseFormatter;
