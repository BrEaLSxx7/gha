(() => {
	'use strict';
	angular
		.module('julian')
		.service('DataBaseService', DataBaseService);
	DataBaseService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
	function DataBaseService($http, host, $httpParamSerializerJQLike) {
		this.login = (data) => {
			return $http({
				method: 'GET',
				url: host + 'controller/login.controller.php',
				params: data
			});
		};
		// this.regitrarusuario = (registrouser) => {
		// 	return $http.post(host + 'controller/register.controller.php', $httpParamSerializerJQLike(registrouser));
		// };

		// this.recuperar = (recuperarcorreo) => {
		// 	return $http({
		// 		method: 'GET',
		// 		url: host + 'controller/recover.controller.php',
		// 		params: { recuperarcorreo }
		// 	});
		// };
		// this.validaterol = (rol) => {
		// 	return $http.post(host + 'controller/checkrol.controller.php', $httpParamSerializerJQLike({ rol }));
		// };
		// this.logout = (data) => {
		// 	return $http.post(host + 'controller/logout.controller.php', $httpParamSerializerJQLike({ data }));
		// };
		// this.tipoproyecto = (tipo) => {
		// 	return $http.post(host + 'controller/tipo.controller.php', $httpParamSerializerJQLike({ tipo }));
		// };
		// this.typegestion = (type,id) => {
		// 	return $http({
		// 		method: 'GET',
		// 		url: host + 'controller/gestiontipo.controller.php',
		// 		params: { type,id }
		// 	});
		// };
	}
})()