module.exports = (sequelize, DataTypes) => {
  const teamPokemons = sequelize.define('team_pokemons', {
    teamId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER,
  }, {
    underscored: true,
  });
  teamPokemons.associate = (models) => {
    teamPokemons.belongsTo(models.teams);
    teamPokemons.belongsTo(models.pokemons);
  };
  return teamPokemons;
};
