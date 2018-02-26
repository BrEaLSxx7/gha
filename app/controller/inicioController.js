(() => {
    'use strict';
    angular
            .module('gha')
            .controller('inicioController', inicioController);
    inicioController.$inject = ['$scope', '$mdDialog','$log','DataBaseService'];
    function inicioController($scope, $mdDialog,$log,Database) {
        $scope.typedocument;
        $scope.numberdocument;
        $scope.password;
        $scope.logeo=()=>{
            $mdDialog.hide();
            $scope.data={
                roltipo: $scope.typedocument,
                number: $scope.numberdocument,
                pass: $scope.password
            };
            Database.login($scope.data)
            .then((response)=>{
                $log.log(response.data);
            })
            .catch((error)=>{
                $log.error(error);
            });
        }
        $scope.log = (ev) => {
            $mdDialog.show({
                controller: "inicioController",
                templateUrl: 'view/login.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
        }
        $scope.recuperar = (ev) => {
            $mdDialog.show({
                controller: "inicioController",
                templateUrl: 'view/recuperar.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
        }
    }
})();