var db = require('./server/db');
var RouteModel = db.model('route');
var UserModel = db.model('user');
var CheckInModel = db.model('checkIn');

var routes = [
    {
        name: 'Right of Ship\'s Prow'
    },
    {
        name: 'Left of 45 Wall'
    },
    {
        name: '45 Wall'
    },
    {
        name: 'The Slab'
    },
    {
        name: 'Ship\'s Prow'
    },
    {
        name: 'Buddha Belly'
    },
    {
        name: 'Left of Buddha Belly'
    },
    {
        name: 'Upstairs Mezzanine Wall'
    },
    {
        name: 'The 3D Wall'
    }
];


var users = [
    {
        first_name: 'Charles',
        last_name: 'Scalesse',
        phone_number: '9175973708'
    },
    {
        first_name: 'Rose',
        last_name: 'Liang',
        phone_number: '9099794134'
    }
];

var checkIns = [
    {
        venue: 'The Cliffs',
        count: 4
    },
    {
        venue: 'Brooklyn Boulders',
        count: 7
    }
];

var creationPromises = [];

function syncModels() {
    routes.forEach(card => {
        creationPromises.push(RouteModel.create(card));
    });

    users.forEach(card => {
        creationPromises.push(UserModel.create(card));
    });

    checkIns.forEach(card => {
        creationPromises.push(CheckInModel.create(card));
    });

    return Promise.all(creationPromises);
}

db.sync({ force: true })
.then(() => {
    return syncModels();
})
.then(createdAll => {
    console.log('Database seeded!');
})
.catch(function(err) {
    console.error(err);
});
