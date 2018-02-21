(() => {
    'use strict';
    angular
            .module('julian')
            .controller('screen3', screen3);
            screen3.$inject = ['$scope', '$mdSidenav', '$log','$mdDialog','$timeout'];
    function screen3($scope, $mdSidenav, $log,$mdDialog,$timeout) {
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
      $scope.showAdvanced = function (ev) {
        $mdDialog.show({
          controller: screen3,
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
        $scope.answer = function() {
          $mdDialog.hide();
        };
    }
  })();