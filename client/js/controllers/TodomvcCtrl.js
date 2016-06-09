/**
 * Created by jeonghwan on 6/3/16.
 */


angular.module('todomvc')
    .controller('TodomvcCtrl', function ($scope, TodomvcStorage) {

        var todos = $scope.todos = TodomvcStorage.get();

        $scope.addTodo = function (todoTitle) {
            todoTitle = todoTitle.trim();
            if (!todoTitle) return;

            var newTodo = {
                title: todoTitle,
                completed: false
            };

            todos = TodomvcStorage.post(newTodo);
            $scope.newTodo = null;
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
        
        $scope.clearCompleted = function () {
            TodomvcStorage.deleteCompleted();
        };
        
    });
