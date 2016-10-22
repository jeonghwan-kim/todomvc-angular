angular.module('todomvc').controller('MainCtrl', function($scope, $routeParams, $location) {
  let todos = $scope.todos = [
    { id: 1, title: ':private yoga',      done: false, createdAt: Date.now() },
    { id: 2, title: ':private: reading',  done: true,  createdAt: Date.now() - 3600000 * 1 },
    { id: 3, title: ':private: cleaning', done: false, createdAt: Date.now() - 3600000 * 2 }
  ];

  const status = (statusParam) => {
    if (!statusParam) return;
    switch(statusParam.toLowerCase()) {
      case 'done':
        return true;
      case 'pending':
        return false;
      default:
        $location.path('/');
    }
  }

  $scope.status = {
    done: status($routeParams.status)
  };

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
