angular.module('planos', ['appService'])
    .service('planosService', ['$http', planosService])

    .component('planos', {
        templateUrl: `planos/planos.html`,
        controller: planosController,
        bindings: {
            $router: '<',
        }
    });

function planosService($http) {
    this.getPlanos = function (sku) {
        return $http.get(`http://private-59658d-celulardireto2017.apiary-mock.com/planos/${sku}`)
    };
}

function planosController($scope, $routeParams, $location, planosService, appService) {
    let plataforma = appService.getPlataforma()
    appService.setTitle(`Planos de ${plataforma.nome}`)

    planosService.getPlanos($routeParams.sku)
        .then(function successCallback(response) {
            $scope.planos = response.data.planos.filter((plano)=>{
                return plano.ativo
            })
        }, function errorCallback(response) {
            $location.path(`/`)
            console.log('erro');
        });

    $scope.clickPlano = function clickPlano(plano) {
        appService.setPlano(plano)
        $location.path(`/contato`)
    }
}