app.config(function ($stateProvider) {

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: '/js/about/about.html',
        controller: 'AboutCtrl'
    });

});

app.controller('AboutCtrl', function ($scope, $state, $log, UserFactory) {

    $scope.hello = 'hello';

});
