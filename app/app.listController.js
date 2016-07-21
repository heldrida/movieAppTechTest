var _ = require('lodash');

module.exports = function ($scope, myMovieService) {

	$scope.sort_by = 'desc';
	$scope.myMovieList = myMovieService.get();

	// todo: service to manage the movie list properly
	myMovieService.sortBy('desc');

	// observer
	$scope.$watch(function () {
		return $scope.sort_by;
	}, function (o, n) {
		$scope.myMovieList = myMovieService.sortBy(n);
	});

	$scope.getTotal = function (actors) {
		return actors.reduce(function(total, actor) {
			return total + actor.salary;
		}, 0);
	}

	$scope.options = [{
		id: 0,
		name: 'asc'
	}, {
		id: 1,
		name: 'desc'
	}];

	$scope.sortBy = function (opt) {
		$scope.sort_by = opt;
	}

}