var request = require('request');
var Sequelize = require('sequelize');
var db = require('../../db');
var CheckIn = db.model('checkIn');

// get check ins and save to db
function getCheckIns(completionHandler) {
    request('https://api.foursquare.com/v2/venues/51571a47e4b03e8de7ec9dbc?oauth_token=4XFY3UGIFQCNJ4GMRH4MW5HVVTO2KRAK1GZISYDFVLXPXDGH&v=20160923', function (error, response, body) {
      if (!error && response.statusCode == 200) {

        var info = JSON.parse(body);
        var checkIn = {
            venue: info.response.venue.name,
            count: info.response.venue.hereNow.count
        };

        completionHandler(checkIn);

      }
    });
}


// called in schedulers.js
module.exports = {
    getCheckIns: getCheckIns
};

