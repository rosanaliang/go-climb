'use strict';

var router = require('express').Router();
var db = require('../db');
var CheckIn = db.model('checkIn');
module.exports = router;

router.get('/most-recent', function(req, res, next) {
    CheckIn.count()
    .then(function(count) {

        CheckIn.findOne({
            where: {
                id: count
            }
        })
        .then(function(checkin) {
            res.send(checkin);
        });

    })
    .catch(next);
});

router.post('/', function(req, res, next) {
    CheckIn.create(req.body)
    .then(function(checkIn) {
        res.status(201).send(checkIn);
    })
    .catch(next);
});
