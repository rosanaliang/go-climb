app.config(function ($stateProvider) {

    $stateProvider.state('success', {
        url: '/success/:userId',
        templateUrl: '/js/signup-success/success.html',
        controller: 'SuccessCtrl'
    });

});

app.controller('SuccessCtrl', function($scope, $stateParams, UserFactory) {

    UserFactory.getById($stateParams.userId)
    .then(function(user) {
        $scope.currentUser = user;
    });

});
