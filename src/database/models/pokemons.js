module.exports = (sequelize, DataTypes) => {
  const pokemons = sequelize.define('pokemons', {
    name: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    xp: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    underscored: true,
    paranoid: true,
  });
  pokemons.associate = (models) => {
    pokemons.hasMany(models.pokemonTypes);
  };
  return pokemons;
};
