'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

let userModel = require('./user.model');
const itemModel = require('./item.model');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
} : {};

let sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);

let user = userModel(sequelize, DataTypes);
const item = itemModel(sequelize, DataTypes);

module.exports = {
    db: sequelize,
    user: user,
    item: item
}