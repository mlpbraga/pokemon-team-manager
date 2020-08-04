module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'team_pokemons',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      teamId: {
        field: 'team_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      pokemonId: {
        field: 'pokemon_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pokemons',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
  down: (queryInterface) => queryInterface.dropTable('team_pokemons'),
};
