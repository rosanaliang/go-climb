app.config(function ($stateProvider) {

    $stateProvider.state('unsubscribe', {
        url: '/unsubscribe',
        templateUrl: '/js/unsubscribe/unsubscribe.html',
        controller: 'UnsubscribeCtrl'
    });

});

app.controller('UnsubscribeCtrl', function ($scope, $state, $log, UserFactory) {

    $scope.error = null;

    $scope.newUser = {};

    $scope.clearField = function() {
        $scope.newUser.phoneNumber = null;
    };

    $scope.submit = function(data) {

        $scope.error = 'You have successfully unsubscribed.';

        UserFactory.delete(data.phoneNumber)
        .then(function(deletedUser) {
            console.log('deleted');
            $scope.clearField();

        });

    };

});
