const pokemonsJSON = require('./pokemon.json');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'pokemons',
    pokemonsJSON.pokemon.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      xp: pokemon.xp,
      image: pokemon.image,
      created_at: new Date(),
      updated_at: new Date(),
    })),
  ),
  down: (queryInterface) => queryInterface.bulkDelete('pokemons', null, {}),
};
