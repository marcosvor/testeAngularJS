angular.module('appService', [])

    .service('appService', AppService);
/* 
 * Serviço para armazenar os dados das views de plataformas e de planos
 * e recuperar na view do formulario
 */
function AppService($location) {
        $ctrl = this;

        this.setTitle = function (title){
            $ctrl.title = title
        }

        this.getTitle = function (){
            return $ctrl.title || `Plataformas`
        }
        this.setPlataforma = function (plataforma) {
            $ctrl.plataforma = plataforma
        }

        this.getPlataforma = function () {
            return $ctrl.plataforma
        };

        this.setPlano = function (plano) {
            $ctrl.plano = plano
        }

        this.getPlano = function () {
            return $ctrl.plano
        };

        this.getLocation = function(){
            return $location.path()
        }
    }