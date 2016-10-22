angular.module('todomvc').directive('todoFilters', () => {
  return {
    restrict: 'E',
    scope: {
      status: '='
    },
    template: `
      <ul>
        <li><button ng-click="status={done: true}">Done</button></li>
        <li><button ng-click="status={done: false}">Pending</button></li>
        <li><button ng-click="status={}">All</button></li>
      </ul>
       `
  };
});
