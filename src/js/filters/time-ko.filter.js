angular.module('todomvc').filter('timeKo', () => {
  return input => {
    if (!input) return '';

    const date = new Date(input);
    return [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      ].join(':');
  };
});
