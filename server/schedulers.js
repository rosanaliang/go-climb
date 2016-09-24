var schedule = require('node-schedule');
var fourSquare = require('./managers/foursquare-manager/foursquare.js');
var db = require('./db');
var CheckIn = db.model('checkIn');
var User = db.model('user');
var Route = db.model('route');
var accountSid = 'AC1ff753ca29d2c2cf84e8842c1d25c6f7';
var authToken = 'ee7b79a372e72feb797029901dae163e';
var client = require('twilio')(accountSid, authToken);


// check four square every hour and sendMessage() if count < 4
function getAndSaveCheckIns() {
    schedule.scheduleJob('0 * * * *', function(){
        fourSquare.getCheckIns(function(checkIn) {
            CheckIn.create(checkIn)
            .then(function(createdCheckIn) {

                console.log('Check in saved to DB.');

                CheckIn.count()
                .then(function(count) {
                    CheckIn.findOne({
                        where: {
                            id: count
                        }
                    })
                    .then(function(checkin) {
                        console.log('CHECKIN COUNT: ', checkin.count);
                        if (checkin.count < 3) {
                            sendMessage();
                        }
                    });
                });
            });
        });
    });
}

// get new route every Thursday at 4:30 pm
function getNewRoutes() {
    schedule.scheduleJob({hour: 16, minute: 30, dayOfWeek: 4}, function(){
            Route.create({
                name: 'new wall'
            })
            .then(function(createdRoute) {
                console.log('Route saved to DB.');
                sendMessage();
            });
    });
}

// twilio sends a message to each user in the db
function sendMessage() {
    User.findAll()
    .then(function(users) {
        users.forEach(function(user) {
            client.messages.create({
                to: '+1' + user.dataValues.phone_number,
                from: '+19093233665',
                body: 'GO CLIMB'
            }, function (err, message) {
                console.log(message.sid);
            });
        });
    });
}

// called in start.js
function start() {
    getAndSaveCheckIns();
    getNewRoutes();
}

module.exports = {
    start: start
};
