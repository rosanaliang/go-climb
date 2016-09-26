var Sequelize = require('sequelize');
var db = null;

if (process.env.DATABASE_URL) {
   // the application is executed on Heroku ... use the postgres database
   db = new Sequelize(process.env.DATABASE_URL, {
     dialect:  'postgres',
     protocol: 'postgres',
     port:     match[4],
     host:     match[3],
     logging:  true //false
   });

} else {
    db = new Sequelize('postgres://localhost:5432/goclimb', { logging: false });
}

module.exports = db;
