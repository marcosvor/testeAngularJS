angular.module('headerCtrl', ['appService'])
    .component('headerCtrl', {
        templateUrl: `header/header.html`,
        controller: headerCtrl
    })

function headerCtrl($scope, $location, appService) {
    $ctrl = this
    $ctrl.title = ``
    $ctrl.page = '/'
    $ctrl.linkPlanos = `#`
    
    $ctrl.title = appService.getTitle()
    $ctrl.plano = appService.getPlano()
    $ctrl.plataforma = appService.getPlataforma()
    
    $scope.$on('$locationChangeSuccess', function () {
        $ctrl.page = $location.path()
        if($ctrl.plano)
            $ctrl.linkPlanos = `/planos/${$ctrl.plataforma.sku}`
    })
}