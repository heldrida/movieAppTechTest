var angular = require('angular');
var uiRouter = require('angular-ui-router');
var config = require('./app.config.js');
var homeController = require('./app.homeController.js');

var myApp = angular.module('myApp', [uiRouter]);

myApp.config(['$stateProvider', config]);

myApp.controller('homeController', ['$scope', homeController]);

myApp.run(['$state', function ($state) {
   $state.transitionTo('home'); 
}]);