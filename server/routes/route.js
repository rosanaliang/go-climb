'use strict';

var router = require('express').Router();
var db = require('../db');
var Route = db.model('route');
module.exports = router;

router.get('/', function(req, res, next) {
    Route.count()
    .then(function(count) {

        Route.findOne({
            where: {
                id: count
            }
        })
        .then(function(route) {
            res.send(route);
        });

    })
    .catch(next);
});

router.post('/', function(req, res, next) {
    Route.create(req.body)
    .then(function(route) {
        res.status(201).send(route);
    })
    .catch(next);
});

// router.delete('/:id', function(req, res, next) {
//     Route.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(function(deletedRoute) {
//         res.status(204).end();
//     })
//     .catch(next);
// });
