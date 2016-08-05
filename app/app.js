var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {


    $routeProvider

        .when('/', {
        templateUrl: '../views/home.html',
        controller: 'HomeController',
    })

    .when('/acesso', {
        templateUrl: '../views/acesso.html',
        controller: 'AcessoController',
    })

    .when('/cadastro', {
        templateUrl: '../views/cadastro.html',
        controller: 'CadastroController',
    })

    .when('/usuario/:id', {
        templateUrl: '../views/usuario.html',
        controller: 'UsuarioController',
    })

    .otherwise({ redirecTo: '/' });

})