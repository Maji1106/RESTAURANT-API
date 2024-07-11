const { DataType } = require("sequelize");
const sequelize = require("./db");
//define DB Schema
const Restaurant = sequelize.define("Restaurant", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    autoIncrement: false,
  },
  ImageUrl: {
    type: DataTypes.STRING,
    autoIncrement: false,
  },
});

Restaurant.sync({ force: true })
  .then(() => {
    console.log("Table created or already exists");
  })
  .catch((error) => {
    console.log("Error creating table:", error);
  });

module.exports = Restaurant;
