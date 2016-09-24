'use strict';

var router = require('express').Router();
var db = require('../db');
var User = db.model('user');
var CheckIn = db.model('checkIn');
var Route = db.model('route');
module.exports = router;

router.use('/users', require('./user'));
router.use('/count', require('./checkin'));
router.use('/route', require('./route'));
