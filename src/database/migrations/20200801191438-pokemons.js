module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('pokemons', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    height: {
      type: Sequelize.FLOAT,
    },
    weight: {
      type: Sequelize.FLOAT,
    },
    xp: {
      type: Sequelize.INTEGER,
    },
    image: {
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
  }),
  down: (queryInterface) => queryInterface.dropTable('pokemons'),
};
