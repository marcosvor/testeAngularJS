angular.module('formCtrl', ['appService', 'ngCpfCnpj', 'ui.mask'])
    .component('formCtrl', {
        templateUrl: `form/form.html`,
        controller: formCtrl,
        bindings: {
            $router: '<'
        }
    });

function formCtrl($scope, $location, appService) {
    appService.setTitle(`Formulário de contato`)
    $scope.formPristine = 'secondary'

    $scope.formUsuario = {}
    $scope.usuario = {}
    $scope.usuario.plataformas = {}
    $scope.usuario.planos = {}

    $scope.usuario.plataformas = appService.getPlataforma()
    $scope.usuario.planos = appService.getPlano()

    /*
     * Copia os dados do formulario para o objeto do usuario e loga no console 
     */
    $scope.salvar = function (form, formUsuario) {
        if (form.$pristine)
            return false

        if (form.$valid) {
            $scope.usuario.dados = angular.copy(formUsuario)
            console.log($scope.usuario)
            form.$setPristine()
            form.$setUntouched()
            $scope.reset()
        }
    }

    $scope.reset = function () {
        $scope.formUsuario = {}
    }
}