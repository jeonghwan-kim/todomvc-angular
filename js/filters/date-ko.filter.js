angular.module('todomvc').filter('dateKo', () => {
  return input => {
    if (!input) return '';

    const date = new Date(input);
    return [
        date.getFullYear().toString().substring(2, 4),
        date.getMonth() + 1,
        date.getDate()
      ].join('/');
  };
});
