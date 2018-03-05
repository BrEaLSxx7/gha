(() => {
  angular
    .module('gha')
    .controller('gestionController', gestionController);
  gestionController.$inject = ['$scope', '$mdSidenav', '$log', '$mdDialog', 'modal'];
  function gestionController($scope, $mdSidenav, $log, $mdDialog, modal) {
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
    $scope.modali = function (ev) {
      $mdDialog.show({
        controller: gestionController,
        templateUrl: 'view/information.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
    };
    $scope.answer = function () {
      $mdDialog.hide();
    };
  }
})();