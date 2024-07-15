const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const { PASSWORD } = require("../config/db.config");

const User = sequelize.define("user", {
  uesrname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
