(() => {
  const app = angular.module('todomvc', []);

  app.controller('TodoCtrl', ($scope) => {
    let todos = $scope.todos = [
      { id: 1, title: '요가', done: false },
      { id: 2, title: '독서', done: true },
      { id: 3, title: '청소', done: false }
    ];

    $scope.onRemove = todo => {
      angular.copy(todos.filter(t => t.id !== todo.id), todos);
    };

  });
})()
