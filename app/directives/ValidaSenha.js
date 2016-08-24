app.directive('validasenha', function ($q, $timeout) {
  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, ngModel) {
      ngModel.$parsers.unshift(validate)

      scope.$watch(attrs.sameAs, function () {
        ngModel.$setViewValue(ngModel.$viewValue)
      })

      function validate (value) {
        var isValid = scope.$eval(attrs.sameAs) == value

        ngModel.$setValidity('notMatch', isValid)

        return isValid ? value : undefined
      }
    }
  }
})
