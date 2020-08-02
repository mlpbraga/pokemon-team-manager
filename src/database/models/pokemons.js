module.exports = (sequelize, DataTypes) => {
  const pokemons = sequelize.define('pokemons', {
    name: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    xp: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    underscored: true,
  });
  pokemons.associate = (models) => {
    pokemons.hasMany(models.pokemon_types);
  };
  return pokemons;
};
