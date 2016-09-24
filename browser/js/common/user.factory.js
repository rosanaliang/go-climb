app.factory('UserFactory', function($http) {
    return {
        add: function(reqUser) {
            return $http.post('/api/users', reqUser)
                    .then(function(response) {
                        return response.data;
                    });
        },

        getById: function(id) {
            return $http.get('/api/users/' + id)
                    .then(function(response) {
                        return response.data;
                    });
        }
    };
});
