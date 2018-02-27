(() => {
  'use strict';
  angular
          .module('gha')
          .controller('dashboardController', dashboardController);
  dashboardController.$inject = ['$scope', '$mdSidenav', '$log','$mdDialog','modal'];
  function dashboardController($scope, $mdSidenav, $log,$mdDialog,modal) {
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
    $scope.modali = function () {
      modal('view/information.html','dashboardController',$mdDialog);
    };
      $scope.answer = function() {
        $mdDialog.hide();
      };
  }
})();