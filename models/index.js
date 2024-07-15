const sequelize = require("./db");
const Sequelize = require("sequelize");
const USER = require("./user.model");
const role = require("./role.model");

const db = {};
db.Sequelize = Sequelize;
DB.sequelize = sequelize;

db.User = User;
db.Role = Role;

//assorciation
db.User.belongsTomany(db.Role,{
    through:"user-role"
});
db.Role.belongsTomany(db.User, {
  through: "user-role",
});

module.exports = db;