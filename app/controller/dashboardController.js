(() => {
  'use strict';
  angular
          .module('gha')
          .controller('dashboardController', dashboardController);
  dashboardController.$inject = ['$scope', '$mdSidenav', '$log','$mdDialog','modal'];
  function dashboardController($scope, $mdSidenav, $log,$mdDialog,modal) {
    $scope.notification = true;
    $scope.title = true;
    $scope.notifications = () => {
      $scope.notification = !$scope.notification;
    };
    $scope.toggleLeft = (componentId) => {
      $mdSidenav('left').toggle();
      $scope.title = !$scope.title;
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