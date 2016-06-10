/**
 * Created by Chris on 6/3/16.
 */

angular.module('todomvc')
    .factory('TodomvcStorage', function ($http, $q) {

      var storage = {
        todos: [],

        get: function () {
          var deferred = $q.defer();
          $http.get('/api/todos')
              .then(function success(response) {
                console.log(response.data);
                deferred.resolve(angular.copy(response.data, storage.todos));
              }, function error(err) {
                console.error(err);
                deferred.reject(err);
              });
          return deferred.promise;
        },

        post: function (todo) {
          var deferred = $q.defer();
          $http.post('/api/todos', {
            title: todo.title
          }).then(function success(response) {
            deferred.resolve(response.data);
          }, function (err) {
            console.error(err);
            deferred.reject(err);
          });
          return deferred.promise;
        },

        delete: function (todo) {
          if (!todo) return;

          var deferred = $q.defer();
          $http.delete('/api/todos/' + todo.id)
              .then(function successs(response) {
                storage.todos.splice(storage.todos.indexOf(todo), 1);
              }, function error(err) {
                console.error(err);
              });
          return deferred.promise;
        },

        update: function (todo) {
          if (!todo) return;

          var deferred = $q.defer();
          $http.put('/api/todos/' + todo.id, todo)
              .then(function successs(response) {
                console.log(response);
              }, function error(err) {
                console.error(err);
              });
          return deferred.promise;
        },

        deleteCompleted: function () {
          // Filter completed todo id list
          var completedTodos = storage.todos.filter(function (todo) {
            return todo.completed;
          });
          var completedTodoIds = completedTodos.map(function (todo) {
            return todo.id;
          });
          console.log(completedTodoIds);

          $http.delete('/api/todos/' + completedTodoIds.join(','))
              .then(function success (response) {
                var incompleteTodos = storage.todos.filter(function (todo) {
                  return !todo.completed;
                });

                angular.copy(incompleteTodos, storage.todos);
              }, function (error) {

              })
        }

      };

      return storage;
    });