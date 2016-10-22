angular.module('todomvc').directive('todoList', () => {
  return {
    restrict: 'E',
    scope: {
      todos: '=',
      status: '=',
      onRemove: '&'
    },
    template: `
      <ul>
        <li ng-repeat="todo in todos | filter: status as results">
          <todo-item todo="todo" on-remove="onRemove({todo: todo})"></todo-item>
        </li>
        <li ng-if="results.length === 0">No results.</li>
      </ul>`
  };
});
