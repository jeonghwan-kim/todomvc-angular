angular.module('todomvc').directive('todoList', () => {
  return {
    restrict: 'E',
    scope: {
      todos: '=',
      status: '=',
      onRemove: '&',
      onUpdate: '&'
    },
    template: `
      <ul>
        <li ng-repeat="todo in todos | orderBy:'-createdAt' | filter: status as results">
          <todo-item todo="todo" on-remove="onRemove({todo: todo})" on-update="onUpdate()"></todo-item>
        </li>
        <li ng-if="results.length === 0">No results.</li>
      </ul>`
  };
});
