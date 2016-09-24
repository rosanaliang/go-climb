'use strict';

var router = require('express').Router();
var db = require('../db');
var User = db.model('user');
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

router.delete('/:id', function(req, res, next) {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(function(deletedUser) {
        res.status(204).end();
    })
    .catch(next);
});
