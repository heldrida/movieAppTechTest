var _ = require('lodash');

module.exports = function ($scope) {

	// todo: service to manage the movie list properly
	$scope.myMovieList = [{
		title: 'movieA',
		category: 'categoryA',
		subcategory: 'subCategoryA',
		actors: [{
			name: 'name1',
			salary: 5000	
		}, {
			name: 'name2',
			salary: 65000
		}, {
			name: 'name3',
			salary: 16500
		}]
	}, {
		title: 'movieB',
		category: 'categoryB',
		subcategory: 'subCategoryB',
		actors: [{
			name: 'name1',
			salary: 66000
		}, {
			name: 'name2',
			salary: 12500
		}, {
			name: 'name3',
			salary: 3295
		}, {
			name: 'name4',
			salary: 85300
		}, {
			name: 'name5',
			salary: 85300
		}, {
			name: 'name6',
			salary: 85300
		}]
	}, {
		title: 'movieC',
		category: 'categoryB',
		subcategory: 'subCategoryB',
		actors: [{
			name: 'name1',
			salary: 66000
		}, {
			name: 'name5',
			salary: 85300
		}, {
			name: 'name6',
			salary: 85300
		}]
	}];

	$scope.getTotal = function (actors) {
		return actors.reduce(function(total, actor) {
			return total + actor.salary;
		}, 0);
	}

}