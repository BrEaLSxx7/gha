(() => {
    angular
        .module('gha')
        .controller('invitadoController', invitadoController);
    invitadoController.$inject = ['$scope', '$log', '$mdDialog'];
    function invitadoController($scope, $log, $mdDialog) {
        $mdDialog.hide();

    }
})();