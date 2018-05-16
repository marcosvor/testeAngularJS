'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute',
    'angular-loading-bar',
    'appService',
    'headerCtrl',
    'plataformas',
    'planos',
    'formCtrl'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'plataformas/plataformas.html',
                controller: plataformasController
            })
            .when('/planos/:sku', {
                templateUrl: 'planos/planos.html',
                controller: planosController
            })
            .when('/contato', {
                templateUrl: 'form/form.html',
                controller: formCtrl
            })
            .otherwise({ redirectTo: '/' })
        // use the HTML5 History API
        $locationProvider.html5Mode(true)
    }])
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false
    }])
    .value('$routerRootComponent', 'app')