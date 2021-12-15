'use strict';

// const { sequelize, DataTypes } = require('./index');

module.exports = (Sequelize, DataTypes) => Sequelize.define('items', {
    text: {
        type: DataTypes.STRING
    },
    assignee: {
        type: DataTypes.STRING
    },
    difficulty: {
        type: DataTypes.INTEGER
    },
    frontend_id: {
        type: DataTypes.STRING
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});;
