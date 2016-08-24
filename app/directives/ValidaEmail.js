app.directive('validaemail', function ($q, $timeout) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            var emails = ['otavio@osanchez.com.br'];

            ctrl.$asyncValidators.username = function (modelValue, viewValue) {

                if (ctrl.$isEmpty(modelValue)) {
                    return $q.when();
                }

                var def = $q.defer();

                $timeout(function () {
                    if (emails.indexOf(modelValue) === -1) {
                        def.resolve();
                    } else {
                        def.reject();
                    }

                }, 2000);

                return def.promise;

            };
        }
    };
});