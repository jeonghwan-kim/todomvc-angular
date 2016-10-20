(() => {
  const app = angular.module('todomvc', []);

  app.controller('TodoCtrl', ($scope) => {
    let todos = $scope.todos = [
      { id: 1, title: '요가', done: false },
      { id: 2, title: '독서', done: true },
      { id: 3, title: '청소', done: false }
    ];

    $scope.onCreate = title => {
      if (title) {
        todos.push({
          id: todos.reduce((max, t) => t.id > max.id ? t : max).id + 1,
          title: title,
          done: false
        });
      }
      $scope.newTodoTitle = '';
    };

    $scope.onRemove = todo => {
      angular.copy(todos.filter(t => t.id !== todo.id), todos);
    };

  });
})();
