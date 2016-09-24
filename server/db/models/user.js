'use strict';

var Sequelize = require('sequelize');
var db = require('../_db');
var Promise = require('sequelize').Promise;

module.exports = db.define('user', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    phone_number: {
        type: Sequelize.STRING
    }
});

