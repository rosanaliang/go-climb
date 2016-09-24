app.factory('CountFactory', function($http) {
    return {
        getCount: function() {
            return $http.get('/api/count/most-recent')
                    .then(function(response) {
                        return response.data;
                    });
        }
    };
});
