module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'pokemon_types',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pokemonId: {
        allowNull: false,
        field: 'pokemon_id',
        type: Sequelize.INTEGER,
        references: { model: 'pokemons', key: 'id' },
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
  ),
  down: (queryInterface) => queryInterface.dropTable('pokemon_types'),
};
