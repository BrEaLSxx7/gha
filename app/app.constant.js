angular.module('gha').constant('host', 'http://localhost/gha/');
angular.module('gha').constant('modal', (template, controller, mddialog) => {
    mddialog.show({
        controller: controller,
        templateUrl: template,
        parent: angular.element(document.body),
        clickOutsideToClose: true,
    })
});