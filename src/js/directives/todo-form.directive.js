angular.module('todomvc').directive('todoForm', () => {
  return {
    restrict: 'E',
    scope: {
      create: '&',
    },
    template: `
      <form name="input-form" ng-submit="create({title: newTodoTitle}); newTodoTitle=''">
        <input type="text" ng-model="newTodoTitle" autofocus ng-trim="true">
        <input type="submit" value="+">
      </form>
       `
  };
});
