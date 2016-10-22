angular.module('todomvc').directive('todoItem', ($filter) => {
  return {
    restrict: 'E',
    scope: {
      todo: '=',
      onRemove: '&'
    },
    template: `
        <input type="checkbox" ng-model="todo.done" />
        <input type="text"  ng-model="todo.title" />
        <small>{{createdAt2}}</small>
        <input type="button" ng-click="onRemove({todo: todo})" value="X"/>
       `,
     link: (scope) => {

       scope.createdAt2 = [
         $filter('dateKo')(scope.todo.createdAt),
         $filter('timeKo')(scope.todo.createdAt),
       ].join(' ')
     }
  };
});
