const Todo = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Todo;
