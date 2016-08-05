app.controller('CadastroController', function($rootScope, $location) {

    $rootScope.activetab = $location.path();
    $rootScope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

})