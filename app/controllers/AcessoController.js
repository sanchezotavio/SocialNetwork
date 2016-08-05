app.controller('AcessoController', function($rootScope, $location) {

    $rootScope.activetab = $location.path();

})