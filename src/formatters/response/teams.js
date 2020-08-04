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
};

module.exports = TeamResponseFormatter;
