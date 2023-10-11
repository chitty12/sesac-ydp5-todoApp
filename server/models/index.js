'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Todo = require('./todo')(sequelize, Sequelize);

db.Todo = Todo;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
