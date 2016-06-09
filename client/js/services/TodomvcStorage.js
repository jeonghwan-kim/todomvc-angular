/**
 * Created by Chris on 6/3/16.
 */

angular.module('todomvc')
    .factory('TodomvcStorage', function () {

        var storage = {

            todos: [{
                title: 'todo 1',
                completed: false
            }, {
                title: 'todo 2',
                completed: false
            }, {
                title: 'todo 3',
                completed: true
            }],

            get: function () {
                return storage.todos;
            },

            post: function (todo) {
                storage.todos.push(todo);
                return storage.todos;
            },

            delete: function (todo) {
                if (!todo) return;

                var idx = storage.todos.indexOf(todo);
                storage.todos.splice(storage.todos.indexOf(todo), 1);
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