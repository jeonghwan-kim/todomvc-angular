angular.module('todomvc').directive('todoItem', () => {
  return {
    restrict: 'E',
    scope: {
      todo: '=',
      onRemove: '&'
    },
    template: `
        <input type="text"  ng-model="todo.title" />
        <input type="checkbox" ng-model="todo.done" />
        <span>{{todo.createdAt | date: 'short'}}</span>
        <input type="button" ng-click="onRemove({todo: todo})" value="X"/>
       `
  };
});
