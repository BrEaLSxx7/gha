(() => {
    'use strict';
    angular
            .module('gha')
            .controller('inicioController', inicioController);
    inicioController.$inject = ['$scope', '$state', '$mdDialog','$log','DataBaseService','modal','$sessionStorage'];
    function inicioController($scope, $state, $mdDialog,$log,Database,modal,$sessionStorage) {
        $scope.data;
        $scope.logeo=()=>{
            $mdDialog.hide();
            Database.login($scope.data)
            .then((response)=>{
                var mensaje=response.data.mensaje;
                var respuesta=response.data.respuesta;
                if (respuesta) {
                    toastr.success(mensaje);
                    $sessionStorage.date=response.data.datos[0];
                    $state.go('dashboard');
                }else{
                    toastr.error(mensaje);
                }
            })
            .catch((error)=>{
                $log.error(error);
            });
        }
        $scope.log = () => {
            modal('view/login.html',"inicioController",$mdDialog);
        }
        $scope.recuperar = () => {
            modal('view/recuperar.html',"inicioController",$mdDialog);
        }
    }
})();