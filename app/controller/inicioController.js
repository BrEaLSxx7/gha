(() => {
    'use strict';
    angular
            .module('gha')
            .controller('inicioController', inicioController);
    inicioController.$inject = ['$scope', '$mdDialog','$log','DataBaseService','modal'];
    function inicioController($scope, $mdDialog,$log,Database,modal) {
        $scope.data;
        $scope.logeo=()=>{
            $mdDialog.hide();
            Database.login($scope.data)
            .then((response)=>{
                $log.log(response.data);
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