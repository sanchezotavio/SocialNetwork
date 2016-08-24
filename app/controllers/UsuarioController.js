app.controller('UsuarioController', function($rootScope, $location) {

    $rootScope.activetab = $location.path();
    $rootScope.Usuarios = Usuarios.getListItems();
});