'use strict';

var app = angular.module('GoClimb', ['ui.router']);

app.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});
