export default (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isCompleted: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {});
  Task.associate = (models) => {
    Task.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
    });
  };
  return Task;
};
