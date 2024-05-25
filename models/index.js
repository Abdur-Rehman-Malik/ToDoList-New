const sequelize = require("../bin/dbConnection");

const users = require("./definitions/users");
const task = require("./definitions/task");
const tasksHasUsers = require("./definitions/tasksHasUsers");
const usersHasTasks = require("./definitions/usersHasTasks");

const models = { users, task, tasksHasUsers, usersHasTasks };

const db = {};
db.sequelize = sequelize;
sequelize.model = models;

module.exports = { db, models };
