angular.module('gha').constant('host', 'http://gha.sena.edu.co/');
angular.module('gha').constant('modal', (template, controller, mddialog) => {
    mddialog.show({
        controller: controller,
        templateUrl: template,
        parent: angular.element(document.body),
        clickOutsideToClose: true,
    })
});