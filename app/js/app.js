var app = angular.module('AngularNode', ['Controllers', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        })
})