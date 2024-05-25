const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class usersHasTasks extends Model {}

usersHasTasks.init(
  {
    tusersHasTasks: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "usersHasTasks",
    sequelize,
  }
);

module.exports = usersHasTasks;
