module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('teams', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      field: 'name',
      type: Sequelize.STRING,
    },
    trainerId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'trainer_id',
      references: { model: 'users', key: 'id' },
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
  down: (queryInterface) => queryInterface.dropTable('teams'),
};
