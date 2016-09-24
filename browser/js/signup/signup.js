app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: '/js/signup/signup.html',
        controller: 'SignupCtrl'
    });

});

app.controller('SignupCtrl', function ($scope, $state, $log, UserFactory) {

    $scope.error = null;

    $scope.newUser = {};

    $scope.submit = function(data) {

        $scope.error = null;

        UserFactory.add(data)
        .then(function(user) {
            $state.go('success', { userId: user.id });
        })
        .catch(function() {
            $scope.error = 'Invalid sign up credentials.';
        });
    };

});
