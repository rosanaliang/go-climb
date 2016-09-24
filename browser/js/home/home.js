app.config(function ($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/js/home/home.html',
        controller: 'HomeCtrl'
    });

});

app.controller('HomeCtrl', function ($scope, $state, $log, UserFactory, CountFactory) {

    CountFactory.getCount()
    .then(function(count) {
        $scope.currentCount = count.count;
    });

});
