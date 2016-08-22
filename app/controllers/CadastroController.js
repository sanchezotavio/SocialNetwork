app.controller('CadastroController', function($rootScope, $location) {

    $rootScope.activetab = $location.path();

     $rootScope.novoUsuario = [];

    $rootScope.save = function(){       
           $rootScope.novoUsuario.push({'email': $rootScope.email , 'usuario' : $rootScope.usuario , 'senha' : $rootScope.senha});        
    }

})