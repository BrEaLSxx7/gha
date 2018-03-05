(() => {
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
                        var respuesta = response.data.respuesta;
                        var mensaje = response.data.mensaje;
                        if (respuesta) {
                            toastr.success(mensaje);
                            $sessionStorage.date = response.data.datos;
                            $state.go('dashboard');
                        } else {
                            toastr.error(mensaje);
                            modal('app/view/login.html', 'inicioController', $mdDialog)
                        }
                    })
                    .catch((error) => {
                        $log.error(error);
                    });
            }, 3000);
        }
        $scope.invitado = () => {
            modal('app/view/sesionInvitado.html', 'inicioController', $mdDialog)
        }
        $scope.log = () => {
            modal('app/view/login.html', "inicioController", $mdDialog);
        }
        $scope.recuperar = () => {
            modal('app/view/recuperar.html', "inicioController", $mdDialog);
        }
    }
})();