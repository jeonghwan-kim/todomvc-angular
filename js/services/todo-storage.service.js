angular.module('todomvc')
.factory('todoStorage', ($http) => {
  const storage = {
    data: [],

    get() {
      $http.get('http://localhost:3002/v1/todos')
          .then(result => angular.copy(result.data, this.data))
          .catch(err => console.error(err));
      return this.data;
    },

    create(title) {
      $http.post('http://localhost:3002/v1/todos', {title: title, done: false})
          .then(result => this.data.push(result.data))
          .catch(err => console.error(err));
    },

    destory(todo) {
      $http.delete(`http://localhost:3002/v1/todos/${todo.id}`)
          .then(result => angular.copy(this.data.filter(t => t.id !== todo.id), this.data))
          .catch(err => console.error(err));
    },

    update(todo) {
      const reqBody = {title: todo.title, done: todo.done};
      $http.put(`http://localhost:3002/v1/todos/${todo.id}`, reqBody)
          .then(result => undefined)
          .catch(err => console.error(err));
    }
  };

  return storage;
});