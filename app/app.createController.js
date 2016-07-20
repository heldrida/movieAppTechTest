module.exports = function ($scope) {
	console.log('create controller loaded!');

	$scope.categories = {
		'movie_a': 'my movie a',
		'movie_b': 'my movie b'
	};

	$scope.subcategories = {
		'sub_a': 'my sub a',
		'sub_b': 'my sub b'
	};

}