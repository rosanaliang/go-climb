'use strict';

var Sequelize = require('sequelize');
var db = require('../_db');
var Promise = require('sequelize').Promise;

module.exports = db.define('route', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

