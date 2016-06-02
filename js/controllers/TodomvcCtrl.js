/**
 * Created by jeonghwan on 6/3/16.
 */


angular.module('todomvc')
    .controller('TodomvcCtrl', function ($scope) {

        $scope.todos = [{
            title: 'todo 1',
            completed: false
        }, {
            title: 'todo 2',
            completed: false
        }, {
            title: 'todo 3',
            completed: true
        }];

        $scope.addTodo = function (todoTitle) {
            todoTitle = todoTitle.trim();
            if (!todoTitle) {
                return;
            }

            var newTodo = {
                title: todoTitle,
                completed: false
            };

            $scope.todos.push(newTodo);

            $scope.newTodo = null;
        };

        $scope.status = '';

        $scope.$watch('status', function () {
            $scope.statusFilter = ($scope.status === 'completed') ?
            { completed: true }  : ($scope.status === 'active') ?
            { completed: false } : {}
        });
    });
