var _ = require('lodash');

module.exports = function ($scope, myMovieService) {

	// todo: service to manage the movie list properly
	myMovieService.sortBy('desc');

	$scope.myMovieList = myMovieService.get();

	$scope.getTotal = function (actors) {
		return actors.reduce(function(total, actor) {
			return total + actor.salary;
		}, 0);
	}

}