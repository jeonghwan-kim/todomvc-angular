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

        deleteCompleted: function () {
          var incompleteTodos = storage.todos.filter(function (todo) {
            return !todo.completed;
          });

          angular.copy(incompleteTodos, storage.todos);
          // return storage.todos;
        }

      };

      return storage;
    });