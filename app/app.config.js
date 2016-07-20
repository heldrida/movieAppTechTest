module.exports = function ($stateProvider) {
	$stateProvider
		.state('home', {
			name: 'home',
			url: '/home',
			templateUrl: 'partials/home.html'
		})
		.state('create', {
			url: '/add',
			templateUrl: 'partials/movie.add.html'
		})
		.state('list', {
			url: '/list',
			templateUrl: 'partials/movie.list.html'
		})
}