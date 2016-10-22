angular.module('todomvc').directive('todoItem', () => {
  return {
    restrict: 'E',
    scope: {
      todo: '=',
      remove: '&'
    },
    template: `
        <input type="text"  ng-model="todo.title" />
        <input type="checkbox" ng-model="todo.done" />
        <input type="button" ng-click="remove(todo)" value="X"/>
       `
  };
});
