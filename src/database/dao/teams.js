const { db, sequelize } = require('../models');

const {
  teams: Teams,
  team_pokemons: TeamPokemons,
  users: Users,
  pokemons: Pokemons,
  pokemon_types: PokemonTypes,
} = db;

const TeamsDAO = {
  readId: async (id) => {
    const foundTeam = await Teams.findByPk(id);
    return foundTeam;
  },
  create: async ({ name, trainerId, pokemons }) => {
    const t = await sequelize.transaction();
    try {
      const newTeam = await Teams.create({
        name,
        trainerId,
      }, {
        transaction: t,
      });

      const teamPokemons = await Promise.all(pokemons.map(async (pokemon) => {
        const row = await TeamPokemons.create({
          teamId: newTeam.id,
          pokemonId: pokemon,
        }, {
          transaction: t,
        });
        return row;
      }));

      const trainerInfo = await Users.findByPk(trainerId);
      const pokemonInfo = await Promise.all(teamPokemons
        .map(async (pokemon) => {
          const info = await Pokemons.findOne({
            include: [{ model: PokemonTypes }],
            where: { id: pokemon.id },
          });
          return info;
        }));
      await t.commit();

      return {
        ...newTeam,
        trainer: trainerInfo,
        pokemons: pokemonInfo,
      };
    } catch (error) {
      await t.rollback();
      throw new Error({ message: 'Fail creating team' });
    }
  },
};

module.exports = TeamsDAO;
