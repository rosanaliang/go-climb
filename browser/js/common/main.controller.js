app.controller('MainCtrl', function ($scope, $state, $log, CountFactory) {

    CountFactory.getCount()
    .then(function(count) {
        $scope.currentCount = count.count;
    });

});
