app.config(function ($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/js/home/home.html',
        controller: 'HomeCtrl'
    });

});

app.controller('HomeCtrl', function ($scope, $state, $log, UserFactory, CountFactory, RouteFactory) {

    CountFactory.getCount()
    .then(function(count) {
        $scope.currentCount = count.count;
    });

    RouteFactory.getRoute()
    .then(function(route) {
        var currentRoute = route.createdAt;
        var year = currentRoute.slice(0, 4);
        var month = currentRoute.slice(5, 7);
        var day = currentRoute.slice(8, 10);

        $scope.currentRouteDate = month + '/' + day + '/' + year;
    });

});
