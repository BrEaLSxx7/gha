(() => {
  angular
    .module('gha')
    .controller('instructoresController', instructoresController);
  instructoresController.$inject = ['$scope', '$mdSidenav', '$log', '$mdDialog', '$timeout'];
  function instructoresController($scope, $mdSidenav, $log, $mdDialog, $timeout) {
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
    $scope.showAdvanced = function (ev) {
      $mdDialog.show({
        controller: instructoresController,
        templateUrl: 'view/information.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function (answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
          $scope.status = 'You cancelled the dialog.';
        });
    };
    $scope.answer = function () {
      $mdDialog.hide();
    };
  }
})();