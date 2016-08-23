app.controller('CadastroController', function ($rootScope, $location) {

    $rootScope.activetab = $location.path();

    $rootScope.novoUsuario;

    $rootScope.save = function () {
        $rootScope.novoUsuario = {
            "nome": $rootScope.nome,
            "usuario": $rootScope.usuario,
            "senha": $rootScope.senha
        };
    }

})