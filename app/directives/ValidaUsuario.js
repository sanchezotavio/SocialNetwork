app.directive(['ValidaUsuario', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var usuarios = ['otavio'];

      ctrl.$asyncValidators.ValidaUsuario = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          return $q.when();
        }
             
        var def = $q.defer();

        $timeout(function() {
          if (usuarios.indexOf(modelValue) === -1) {
            def.resolve();
          } else {
            def.reject();
          }

        }, 2000);
       
        return def.promise;
      };
    }
  };
}]);

