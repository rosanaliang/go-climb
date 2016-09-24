'use strict';

var router = require('express').Router();
var db = require('../db');
var User = db.model('user');
var CheckIn = db.model('checkIn');
module.exports = router;

router.use('/users', require('./user'));
router.use('/count', require('./checkin'));
