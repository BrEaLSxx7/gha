(() => {
	'use strict';
	angular.module('julian').constant('host','http://localhost/gha/')
	angular
		.module('julian')
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
			.state('screen1', {
				url: '/screen1',
				controller: 'screen1',
				templateUrl: 'view/screen1.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load([{
							files: ['controller/screen1.js']
						}]);
					}]
				}
			})
			.state('screen2',{
				url: '/screen2',
				controller: 'screen2',
				templateUrl: 'view/screen2.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad)=>{
						return $ocLazyLoad.load([{
							files:['controller/screen2.js']
						}])
					}]
				}
			})
		.state('screen3',{
			url: '/screen3',
			controller: 'screen3',
			templateUrl: 'view/screen3.html',
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad)=>{
					return $ocLazyLoad.load([{
						files:['controller/screen3.js']
					}])
				}]
			}
		})
		.state('screen4',{
			url: '/screen4',
			controller: 'screen4',
			templateUrl: 'view/screen4.html',
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', ($ocLazyLoad)=>{
					return $ocLazyLoad.load([{
						files:['controller/screen4.js']
					}])
				}]
			}
		});
	}

})();