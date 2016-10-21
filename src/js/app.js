(() => {
  const app = angular.module('todomvc', []);

  app.controller('TodoCtrl', ($scope) => {
    let todos = $scope.todos = [
      { id: 1, title: 'yoga', done: false },
      { id: 2, title: 'reading', done: true },
      { id: 3, title: 'cleaning', done: false }
    ];

    $scope.onCreate = title => {
      if (title) {
        todos.push({
          id: todos.reduce((max, t) => t.id > max ? t.id : max, 0).id + 1,
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
