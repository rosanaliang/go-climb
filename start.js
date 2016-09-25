var db = require('./server/db');
var app = require('./server/app');
var server = require('http').createServer();
var schedule = require('./server/schedulers.js');

db.sync()
.then(function() {
    server.on('request', app);
})
.then(function() {
    var PORT = process.env.PORT || 3000;
    server.listen(PORT, function() {
        console.log('Server started on port ', PORT);
        schedule.start();
    });
})
.catch(function(err) {
    console.error(err.stack);
});

