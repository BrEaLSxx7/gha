(() => {
	'use strict';
	angular
		.module('gha')
		.service('DataBaseService', DataBaseService);
	DataBaseService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
	function DataBaseService($http, host, $httpParamSerializerJQLike) {
		this.login = (data) => {
			return $http.post(host+'controller/login.controller.php',$httpParamSerializerJQLike(data));
		};
		this.security = (data) => {
			 return $http.post(host+'controller/security.php',$httpParamSerializerJQLike(data));
		}

	}
})()