const pokemonsJSON = require('./pokemon.json');

module.exports = {
  up: (queryInterface) => {
    const types = [];
    pokemonsJSON.pokemon.forEach((pokemon) => {
      pokemon.types.forEach((type) => {
        types.push({ pokemon_id: pokemon.id, type });
      });
    });
    return queryInterface.bulkInsert(
      'pokemon_types',
      types.map((type, index) => ({
        ...type,
        id: index + 1,
        created_at: new Date(),
        updated_at: new Date(),
      })),
    );
  },
  down: (queryInterface) => queryInterface.bulkDelete('pokemon_types', null, {}),
};
