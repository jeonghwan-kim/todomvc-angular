angular.module('todomvc')
.factory('todoStorage', () => {
  const storage = {
    data: [{
      id: 1,
      title: ':private yoga',
      done: false,
      createdAt: Date.now()
    }, {
      id: 2,
      title: ':private: reading',
      done: true,
      createdAt: Date.now() - 3600000 * 1
    }, {
      id: 3,
      title: ':private: cleaning',
      done: false,
      createdAt: Date.now() - 3600000 * 2
    }],

    get() {
      return this.data;
    },

    create(title) {
      this.data.push({
        id: this.todos.reduce((max, t) => t.id > max ? t.id : max, 0).id + 1,
        title: title,
        done: false,
        createdAt: Date.now()
      });
    },

    destory(todo) {
      angular.copy(this.data.filter(t => t.id !== todo.id), this.todos);
    }
  };

  return storage;
});