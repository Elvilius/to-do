import * as bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    password: DataTypes.STRING,
    email: [DataTypes.STRING, DataTypes.email],
  }, {});

  User.associate = () => {
    // associations can be defined here
  };
  // eslint-disable-next-line func-names
  User.prototype.validatePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
