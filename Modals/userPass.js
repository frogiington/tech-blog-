const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UserPass extends Model {}

UserPass.init(
  {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    password: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'userPass',
  }
);

module.exports = UserPass;