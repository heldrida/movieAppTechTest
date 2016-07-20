module.exports = function ($stateProvider) {
	$stateProvider
		.state('home', {
			name: 'home',
			url: '/home',
			templateUrl: '/partials/home.html'
		});
}