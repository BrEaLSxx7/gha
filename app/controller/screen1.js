(() => {
  'use strict';
  angular
          .module('gha')
          .controller('screen1', screen1);
  screen1.$inject = ['$scope', '$mdSidenav', '$log','$mdDialog'];
  function screen1($scope, $mdSidenav, $log,$mdDialog) {
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
        controller: screen1,
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