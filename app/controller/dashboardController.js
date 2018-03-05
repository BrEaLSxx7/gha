(() => {
  angular
    .module('gha')
    .controller('dashboardController', dashboardController);
  dashboardController.$inject = ['$scope', '$mdSidenav', '$state', '$log', '$mdDialog', 'modal', '$sessionStorage', 'DataBaseService', '$rootScope'];
  function dashboardController($scope, $mdSidenav, $state, $log, $mdDialog, modal, $sessionStorage, DataBase, $rootScope) {
    if (typeof ($sessionStorage.date) !== "undefined") {
      $scope.date = $sessionStorage.date;
      $log.log($scope.date[1][0])
      $scope.nombre = $scope.date[1][0].usu_nombre;
      $scope.correo = $scope.date[1][0].usu_correo;
      $scope.img = $scope.date[1][0].dus_avatar;
      var data = {
        usu: true,
        id: $scope.date.usu_id,
      }
      $scope.verify = true;
      $scope.edit = () => {
        $scope.verify = !$scope.verify;
      }
      DataBase.security(data)
        .then((response) => {
          $log.log(response);
          $scope.notification = true;
          $scope.title = true;
          $scope.notifications = () => {
            $scope.notification = !$scope.notification;
          };
          $scope.toggleLeft = (componentId) => {
            $mdSidenav('left').toggle();
            $scope.title = !$scope.title;
          };
          $scope.modali = function () {
            modal('app/view/information.html', 'dashboardController', $mdDialog);
          };
          $scope.answer = function () {
            $mdDialog.hide();
          };
        })
        .catch((error) => {
          $log.error(error);
        })

    } else {
      $state.go('index');
    }
  }
})();