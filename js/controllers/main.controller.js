angular.module('todomvc').controller('MainCtrl', function($scope, $routeParams, $location, todoStorage) {
  $scope.todos = todoStorage.get();

  const status = statusParam => {
    if (!statusParam) return;
    switch(statusParam.toLowerCase()) {
      case 'done':
        return true;
      case 'pending':
        return false;
      default:
        $location.path('/');
    }
  };

  $scope.status = {
    done: status($routeParams.status)
  };

  $scope.onCreate = title => {
    if (title) todoStorage.create(title);
  };

  $scope.onRemove = todo => todoStorage.destory(todo);

  $scope.onUpdate = _=> todoStorage.update();
});
