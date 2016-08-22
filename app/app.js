var app = angular.module('app', ['ngRoute']);

var nomeProjeto = "Social Network Gamer"

app.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
        title: nomeProjeto + ' | ' + 'Home',
        templateUrl: '../views/home.html',
        controller: 'HomeController',
    })

    .when('/acesso', {
        title: nomeProjeto + ' | ' +  'Acesso',
        templateUrl: '../views/acesso.html',
        controller: 'AcessoController',
    })

    .when('/cadastro', {
        title: nomeProjeto + ' | ' +  'Cadastro',
        templateUrl: '../views/cadastro.html',
        controller: 'CadastroController',
    })

    .when('/usuario/:id', {
        title: nomeProjeto + ' | ' +  'Usuário',
        templateUrl: '../views/usuario.html',
        controller: 'UsuarioController',
    })
    
    .otherwise({ redirecTo: '/' });

});

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.nomeProjeto = nomeProjeto;
        $rootScope.footer = nomeProjeto;
    });
}]);