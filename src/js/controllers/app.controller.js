angular.module('todomvc').controller('TodoCtrl', $scope => {
  let todos = $scope.todos = [
    { id: 1, title: 'yoga',     done: false, createdAt: Date.now() },
    { id: 2, title: 'reading',  done: true,  createdAt: Date.now() - 3600000 * 1 },
    { id: 3, title: 'cleaning', done: false, createdAt: Date.now() - 3600000 * 2 }
  ];

  $scope.onCreate = title => {
    if (title) {
      todos.push({
        id: todos.reduce((max, t) => t.id > max ? t.id : max, 0).id + 1,
        title: title,
        done: false,
        createdAt: Date.now()
      });
    }
  };

  $scope.onRemove = todo => {
    angular.copy(todos.filter(t => t.id !== todo.id), todos);
  };
});
