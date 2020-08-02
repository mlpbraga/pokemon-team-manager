module.exports = (sequelize, DataTypes) => {
  const pokemonTypes = sequelize.define('pokemon_types', {
    type: DataTypes.STRING,
  }, {
    underscored: true,
  });
  pokemonTypes.associate = (models) => {
    // pokemonTypes.belongsTo(models.pokemon);
  };
  return pokemonTypes;
};
