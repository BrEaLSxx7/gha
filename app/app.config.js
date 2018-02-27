(() => {
	'use strict';
	angular
		.module('gha')
		.config(config);

	config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];
	function config($httpProvider, $stateProvider, $urlRouterProvider) {
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		$httpProvider.defaults.headers.delete = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('index', {
				url: '/',
				controller: 'inicioController',
				templateUrl: 'view/inicio.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load([{
							files: ['controller/inicioController.js']
						}]);
					}]
				}
			})
			.state('dashboard', {
				url: '/dashboard',
				controller: 'dashboardController',
				templateUrl: 'view/dashboard.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load([{
							files: ['controller/dashboardController.js']
						}]);
					}]
				}
			})
			.state('fichas',{
				url: '/fichas',
				controller: 'fichasController',
				templateUrl: 'view/fichas.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad)=>{
						return $ocLazyLoad.load([{
							files:['controller/fichasController.js']
						}])
					}]
				}
			})
		.state('instructores',{
			url: '/instructores',
			controller: 'instructoresController',
			templateUrl: 'view/instructores.html',
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad)=>{
					return $ocLazyLoad.load([{
						files:['controller/instructoresController.js']
					}])
				}]
			}
		})
		.state('gestion',{
			url: '/gestion',
			controller: 'gestionController',
			templateUrl: 'view/gestion.html',
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad)=>{
					return $ocLazyLoad.load([{
						files:['controller/gestionController.js']
					}])
				}]
			}
		});
	}

})();