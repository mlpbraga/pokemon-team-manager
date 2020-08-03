module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    underscored: true,
  });
  users.associate = (models) => {
    // associations can be defined here
  };
  return users;
};
