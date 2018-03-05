(() => {
	angular
		.module('gha')
		.config(config);

	config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function config($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode(true);
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		$httpProvider.defaults.headers.delete = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('index', {
				url: '/',
				controller: 'inicioController',
				templateUrl: 'app/view/inicio.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load([{
							files: ['app/controller/inicioController.js']
						}]);
					}]
				}
			})
			.state('dashboard', {
				url: '/dashboard',
				controller: 'dashboardController',
				templateUrl: 'app/view/dashboard.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load([{
							files: ['app/controller/dashboardController.js']
						}]);
					}]
				}
			})
			.state('fichas', {
				url: '/fichas',
				controller: 'fichasController',
				templateUrl: 'app/view/fichas.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad) => {
						return $ocLazyLoad.load([{
							files: ['app/controller/fichasController.js']
						}])
					}]
				}
			})
			.state('instructores', {
				url: '/instructores',
				controller: 'instructoresController',
				templateUrl: 'app/view/instructores.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad) => {
						return $ocLazyLoad.load([{
							files: ['app/controller/instructoresController.js']
						}])
					}]
				}
			})
			.state('gestion', {
				url: '/gestion',
				controller: 'gestionController',
				templateUrl: 'app/view/gestion.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad) => {
						return $ocLazyLoad.load([{
							files: ['app/controller/gestionController.js']
						}])
					}]
				}
			})
			.state('invitado', {
				url: '/invitado',
				controller: 'invitadoController',
				templateUrl: 'app/view/invitado.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad) => {
						return $ocLazyLoad.load([{
							files: ['app/controller/invitadoController.js']
						}])
					}]
				}
			});
	}

})();