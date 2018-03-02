(() => {
    'use strict';
    angular
        .module('gha')
        .controller('inicioController', inicioController);
    inicioController.$inject = ['$scope', '$state', '$mdDialog', '$log', 'DataBaseService', 'modal', '$sessionStorage', '$timeout', '$rootScope'];
    function inicioController($scope, $state, $mdDialog, $log, Database, modal, $sessionStorage, $timeout, $rootScope) {
        $scope.data;
        $rootScope.load = false;
        $scope.logeo = () => {
            $rootScope.load = true;
            $mdDialog.hide();
            $timeout(() => {
                Database.login($scope.data)
                    .then((response) => {
                        $log.log($scope.load);
                        var respuesta = response.data.respuesta;
                        var mensaje = response.data.mensaje;
                        if (respuesta) {
                            toastr.success(mensaje);
                            $sessionStorage.date = response.data.datos[0];
                            $state.go('dashboard');
                        } else {
                            toastr.error(mensaje);
                            modal('view/login.html', 'inicioController', $mdDialog, $scope)
                        }
                    })
                    .catch((error) => {
                        $log.error(error);
                    });
            }, 3000);
        }
        $scope.log = () => {
            modal('view/login.html', "inicioController", $mdDialog, $scope);
        }
        $scope.recuperar = () => {
            modal('view/recuperar.html', "inicioController", $mdDialog);
        }
    }
})();