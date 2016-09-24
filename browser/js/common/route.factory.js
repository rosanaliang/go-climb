app.factory('RouteFactory', function($http) {
    return {
        getRoute: function() {
            return $http.get('/api/route')
                    .then(function(response) {
                        return response.data;
                    });
        }
    };
});
