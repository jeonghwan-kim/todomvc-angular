angular.module('todomvc')
.factory('todoStorage', () => {
  const _LSKey = 'TODO_DATA';
  const _loadFromLS = _=> JSON.parse(localStorage.getItem(_LSKey));
  const _saveToLS = data => localStorage.setItem(_LSKey, JSON.stringify(data));
  const _genId = () => {
    if (!storage.data.length) return 1;
    else return storage.data.reduce((max, t) => t.id > max ? t.id : max, 0) + 1;
  };

  const storage = {
    data: [],

    get() {
      angular.copy(_loadFromLS(), this.data);
      return this.data;
    },

    create(title) {
      this.data.push({
        id: _genId(),
        title: title,
        done: false,
        createdAt: Date.now()
      });
      _saveToLS(this.data);
    },

    destory(todo) {
      angular.copy(this.data.filter(t => t.id !== todo.id), this.data);
      _saveToLS(this.data);
    },

    update() { _saveToLS(this.data); }
  };

  return storage;
});