export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING,
  }, {});

  User.associate = () => {
    // associations can be defined here
  };
  return User;
};
