(() => {
    'use strict';
    angular
            .module('gha')
            .controller('gestionController', gestionController);
    gestionController.$inject = ['$scope', '$mdSidenav', '$log','$mdDialog','modal'];
    function gestionController($scope, $mdSidenav, $log,$mdDialog,modal) {
      $scope.julio = true;
      $scope.julioxdx2 = true;
      $scope.julioxd = () => {
        $scope.julio = !$scope.julio;
      };
      $scope.toggleLeft = (componentId) => {
        $mdSidenav('left').toggle();
        $scope.julioxdx2 = !$scope.julioxdx2;
        $log.log(componentId);
      };
      $scope.modali = function (ev) {
        $mdDialog.show({
          controller: gestionController,
          templateUrl: 'view/information.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        })
      };
        $scope.answer = function() {
          $mdDialog.hide();
        };
    }
  })();