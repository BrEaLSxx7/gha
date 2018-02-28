(() => {
  'use strict';
  angular
    .module('gha')
    .controller('fichasController', fichasController);
  fichasController.$inject = ['$scope', '$mdSidenav', '$log', '$mdDialog', '$timeout','modal'];
  function fichasController($scope, $mdSidenav, $log, $mdDialog, $timeout,modal) {
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
    $scope.modali = () => {
      modal('view/information.html','fichasController',$mdDialog);
    };
    $scope.answer = () => {
      $mdDialog.hide();
    };
    $scope.modalcre = () => {
      modal('view/crearf.html','fichasController',$mdDialog);
    }
    $scope.modaledit = () => {
      modal('view/editf.html','fichasController',$mdDialog);
    }
    $scope.modaldelete = (ev) => {
      modal('view/deletef.html','fichasController',$mdDialog);
    }
    $scope.siguiente = true;
    $scope.informacion = true;
    $scope.ambiente = false;
    $scope.datos = false;
    $scope.planeacion = false;
    $scope.crear = ['Informacion', 'Ambiente', 'Datos fichas', 'Planeacion pedagogica'];
    $scope.currentNavItem = "Informacion"
    $scope.goto = function (page) {
      $scope.currentNavItem = page;
      $scope.siguiente = $scope.currentNavItem === "Planeacion pedagogica" ? false : true;
      if ($scope.currentNavItem === "Ambiente") {
        $scope.ambiente = true;
      } else {
        $scope.ambiente = false;
      }
      if ($scope.currentNavItem === "Informacion") {
        $scope.informacion = true;
      } else {
        $scope.informacion = false;
      }
      if ($scope.currentNavItem === "Datos fichas") {
        $scope.datos = true;
      } else {
        $scope.datos = false;
      }
      if ($scope.currentNavItem === "Planeacion pedagogica") {
        $scope.planeacion = true;
      } else {
        $scope.planeacion = false;
      }
    };
    $scope.sig = (id) => {
      $log.log($scope.currentNavItem)
      $scope.crear.forEach((e, i) => {
        if (e === id) {
          $scope.currentNavItem = $scope.crear[i + 1];
        }
      });
      $scope.siguiente = $scope.currentNavItem === "Planeacion pedagogica" ? false : true;
      if ($scope.currentNavItem === "Informacion") {
        $scope.informacion = true;
      } else {
        $scope.informacion = false;
      }
      if ($scope.currentNavItem === "Ambiente") {
        $scope.ambiente = true
      } else {
        $scope.ambiente = false;
      }
      if ($scope.currentNavItem === "Datos fichas") {
        $scope.datos = true
      } else {
        $scope.datos = false;
      }
      if ($scope.currentNavItem === "Planeacion pedagogica") {
        $scope.planeacion = true
      } else {
        $scope.planeacion = false;
      }
    }
    $scope.ar1 = 0;
    $scope.ar2 = 0;
    $scope.ar4 = 0;
    $scope.ar3 = 0;
    $scope.accordion = (n) => {
      if (n === 1) {
        $scope.ar1++;
        if ($scope.ar1 <= 1) {
          $(".panel1").animate({
            height: '5vh',
          })
        } else {
          $scope.ar1=0;
          $(".panel1").animate({
            height: '0',
          })
        }
      } else if (n === 2) {
        $scope.ar2++;
        if ($scope.ar2 <= 1) {
          $(".panel2").animate({
            height: '5vh',
          })
        } else {
          $scope.ar2=0;
          $(".panel2").animate({
            height: '0',
          })
        }
      } else if (n===3){
        $scope.ar3++;
        if ($scope.ar3 <= 1) {
          $(".panel3").animate({
            height: '5vh',
          })
        } else {
          $scope.ar3=0;
          $(".panel3").animate({
            height: '0',
          })
        }
      } else if (n===4){
        $scope.ar4++;
        if ($scope.ar4 <= 1) {
          $(".panel4").animate({
            height: '5vh',
          })
        } else {
          $scope.ar4=0;
          $(".panel4").animate({
            height: '0',
          })
        }
      }
    }
  }
})();