'use strict';

var router = require('express').Router();
var db = require('../db');
var User = db.model('user');
var accountSid = 'AC1ff753ca29d2c2cf84e8842c1d25c6f7';
var authToken = 'ee7b79a372e72feb797029901dae163e';
var client = require('twilio')(accountSid, authToken);
module.exports = router;

router.get('/', function(req, res, next) {
    User.findAll()
    .then(function(users) {
        res.status(200).send(users);
    })
    .catch(next);
});

router.get('/:id', function(req, res, next) {
    User.findById(req.params.id)
    .then(function(user) {
        res.status(200).send(user);
    })
    .catch(next);
});

router.post('/', function(req, res, next) {
    User.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        phone_number: req.body.phoneNumber
    })
    .then(function(user) {
        res.status(201).send(user);
    })
    .catch(next);
});

router.delete('/:phone', function(req, res, next) {
    User.destroy({
        where: {
            phone_number: req.params.phone
        }
    })
    .then(function(deletedUser) {
        res.status(204).end();
    })
    .catch(next);
});

router.post('/:phone', function(req, res, next) {
    User.findOne({
        where: {
            phone_number: req.params.phone
        }
    })
    .then(function(user) {
        console.log('USER PHONE: ', user.phone_number);
        client.messages.create({
            to: '+1' + user.phone_number,
            from: '+19093233665',
            body: 'GO CLIMB'
        }, function (err, message) {
            console.log(message.sid);
        });
    });
})
