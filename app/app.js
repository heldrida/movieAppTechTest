var angular = require('angular');
var uiRouter = require('angular-ui-router');
var config = require('./app.config.js');

var myApp = angular.module('myApp', [uiRouter]);

myApp.config(['$stateProvider', config]);

myApp.run(['$state', function ($state) {
   $state.transitionTo('home'); 
}]);