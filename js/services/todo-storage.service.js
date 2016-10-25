angular.module('todomvc')
.factory('todoStorage', () => {
  const storage = {
    data: [],

    get() {
      const t = JSON.parse(localStorage.getItem('TODO_DATA'))
      angular.copy(t, this.data);
      return this.data;
    },

    create(title) {
      this.data.push({
        id: this.data.reduce((max, t) => t.id > max ? t.id : max, 0).id + 1,
        title: title,
        done: false,
        createdAt: Date.now()
      });

      localStorage.setItem('TODO_DATA', JSON.stringify(this.data));
    },

    destory(todo) {
      angular.copy(this.data.filter(t => t.id !== todo.id), this.data);
      localStorage.setItem('TODO_DATA', JSON.stringify(this.data));
    },

    update() {
      localStorage.setItem('TODO_DATA', JSON.stringify(this.data));
    }
  };

  return storage;
});