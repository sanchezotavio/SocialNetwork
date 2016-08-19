var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
        title: 'Home',
        templateUrl: '../views/home.html',
        controller: 'HomeController',
    })

    .when('/acesso', {
        title: 'Acesso',
        templateUrl: '../views/acesso.html',
        controller: 'AcessoController',
    })

    .when('/cadastro', {
        title: 'Cadastro',
        templateUrl: '../views/cadastro.html',
        controller: 'CadastroController',
    })

    .when('/usuario/:id', {
        title: 'Usuário',
        templateUrl: '../views/usuario.html',
        controller: 'UsuarioController',
    })
    
    .otherwise({ redirecTo: '/' });

});

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);