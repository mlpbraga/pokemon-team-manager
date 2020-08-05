module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    trainerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    underscored: true,
  });
  teams.associate = (models) => {
    teams.hasMany(models.team_pokemons);
  };
  return teams;
};
