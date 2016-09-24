var db = require('./_db');

require('./models/user');
require('./models/route');
require('./models/checkin');

module.exports = db;
