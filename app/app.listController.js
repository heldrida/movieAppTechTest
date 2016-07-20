var _ = require('lodash');

module.exports = function ($scope) {

	$scope.actorList = [{
		name: 'name1',
		salary: 5000	
	}, {
		name: 'name2',
		salary: 65000
	}, {
		name: 'name3',
		salary: 16500
	}];

	$scope.getTotal = function () {
		return $scope.actorList.reduce(function(total, actor) {
			return total + actor.salary;
		}, 0);
	}

}