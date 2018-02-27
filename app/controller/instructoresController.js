(() => {
    'use strict';
    angular
            .module('gha')
            .controller('instructoresController', instructoresController);
            instructoresController.$inject = ['$scope', '$mdSidenav', '$log','$mdDialog','$timeout'];
    function instructoresController($scope, $mdSidenav, $log,$mdDialog,$timeout) {
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
        $scope.answer = function() {
          $mdDialog.hide();
        };
    }
  })();