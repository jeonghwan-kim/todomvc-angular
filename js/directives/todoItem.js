angular.module('todomvc')
    .directive('todoItem', function() {
      return {
        restrict: 'E',
        scope: {
          todo: '=',
          remove: '&'
        },
        template: 
          '<div class="input-group">' +
            '<span class="input-group-addon">' +
              '<input type="checkbox" aria-label="..." ng-model="todo.completed">' +
            '</span>' +
          '<input type="text" class="form-control" aria-label="..."' +
              'ng-model="todo.title">' +
            '<div class="input-group-btn">' +
              '<button class="btn btn-danger" ng-click="remove(todo)">Remove</button>' +
            '</div>' +
          '</div>'
      }
    });
