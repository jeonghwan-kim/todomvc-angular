angular.module('todomvc').directive('todoTextValidator', () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, elem, attrs, modelCtrl) => {
      modelCtrl.$validators.todoText = (modelValue, viewValue) => {
        if (viewValue) return /^(:\w+\s)/.test(viewValue);
      }
    }
  };
});
