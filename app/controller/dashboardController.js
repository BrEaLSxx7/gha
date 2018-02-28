(() => {
  'use strict';
  angular
          .module('gha')
          .controller('dashboardController', dashboardController);
  dashboardController.$inject = ['$scope', '$mdSidenav', '$state', '$log','$mdDialog','modal','$sessionStorage','DataBaseService'];
  function dashboardController($scope, $mdSidenav, $state, $log,$mdDialog,modal,$sessionStorage,DataBase) {
    if (typeof ($sessionStorage.date) !== "undefined") {
      $scope.date=$sessionStorage.date;
      var data={
            usu: true,
            id: $scope.date.usu_id,
          }
      DataBase.security(data)
      .then(async response => {
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
        modal('view/information.html','dashboardController',$mdDialog);
      };
        $scope.answer = function() {
          $mdDialog.hide();
        };
      })
      .catch((error)=>{
          $log.error(error);
      })

    }else{
      $state.go('index');
    }
  }
})();