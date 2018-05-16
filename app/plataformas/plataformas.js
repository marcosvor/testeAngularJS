angular.module('plataformas', ['appService'])
    .service('plataformasService', ['$http', plataformasService])

    .component('plataformas', {
        templateUrl: `plataformas/plataformas.html`,
        controller: plataformasController,
        bindings: {
            $router: '<'
        }
    });

function plataformasService($http) {
    this.getPlataformas = function () {
        return $http.get("http://private-59658d-celulardireto2017.apiary-mock.com/plataformas");
    };
}

function plataformasController($http, $scope, $location, plataformasService, appService) {
    $scope.plataformas = []
    appService.setTitle(`Plataformas`)

    plataformasService.getPlataformas()
        .then(function successCallback(response) {
            $scope.plataformas = response.data.plataformas
            
            let aux = $scope.plataformas[0].descricao.split('para')
            $scope.plataformas[0].descricao = aux[0]
            $scope.plataformas[0].descricao2 = `Para ${aux[1]}`

            aux = $scope.plataformas[1].descricao.split('|')
            $scope.plataformas[1].descricao = aux[0]
            $scope.plataformas[1].descricao2 = aux[1]
            
            aux = $scope.plataformas[2].descricao.split('para|')
            $scope.plataformas[2].descricao = aux[0]
            $scope.plataformas[2].descricao2 = `Para a ${aux[1]}`

        }, function errorCallback(response) {
            console.log('erro');
        });

    $scope.clickPlataforma = function (plataforma) {
        appService.setPlataforma(plataforma)
        $location.path(`/planos/${plataforma.sku}`)
    }
}