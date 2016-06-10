/**
 * Created by jeonghwan on 6/3/16.
 */


angular.module('todomvc')
    .controller('TodomvcCtrl', function ($scope, TodomvcStorage) {

      TodomvcStorage.get().then(function (todos) {
        $scope.todos = todos;
      });

      $scope.addTodo = function (todoTitle) {
        todoTitle = todoTitle.trim();
        if (!todoTitle) return;

        var newTodo = {
          title: todoTitle,
        };

        TodomvcStorage.post(newTodo)
            .then(function (todo) {
              $scope.todos.push(todo);
              $scope.newTodo = null;
            });
      };

      $scope.status = '';

      $scope.$watch('status', function () {
        $scope.statusFilter = ($scope.status === 'completed') ?
        {completed: true} : ($scope.status === 'active') ?
        {completed: false} : {}
      });

      $scope.remove = function (todo) {
        TodomvcStorage.delete(todo);
      };

      $scope.update = function (todo) {
        TodomvcStorage.update(todo);
      };

      $scope.clearCompleted = function () {
        TodomvcStorage.deleteCompleted();
      };

    });
