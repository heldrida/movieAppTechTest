module.exports = function ($stateProvider) {
	$stateProvider
		.state('home', {
			name: 'home',
			url: '/home',
			templateUrl: 'partials/home.html',
            controller: 'homeController'
		})
		.state('create', {
			url: '/create',
			templateUrl: 'partials/movie.create.html',
			controller: 'createController'
		})
		.state('list', {
			url: '/list',
			templateUrl: 'partials/movie.list.html',
			controller: 'listController'
		})
}