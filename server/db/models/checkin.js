'use strict';

var Sequelize = require('sequelize');
var db = require('../_db');
var Promise = require('sequelize').Promise;

module.exports = db.define('checkIn', {
    venue: {
        type: Sequelize.STRING,
        allowNull: false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
