angular.module('todomvc').directive('todoItem', ($filter) => {
  return {
    restrict: 'E',
    scope: {
      todo: '=',
      onRemove: '&',
      onUpdate: '&'
    },
    template: `
      <form name="editForm" ng-submit="onUpdate()">
        <input type="checkbox" ng-model="todo.done" ng-click="onUpdate()" />
        <input type="text"  name="title" ng-model="todo.title" ng-blur="updateTitle()"
               ng-trim="true"
               ng-minlength="2"
               ng-maxlength="30"
               todo-text-validator />
        <small>{{createdAt2}}</small>
        <input type="button" ng-click="onRemove({todo: todo})" value="X"/>
      </form>
       `,
     link: (scope) => {

       scope.createdAt2 = [
         $filter('dateKo')(scope.todo.createdAt),
         $filter('timeKo')(scope.todo.createdAt),
       ].join(' ')

       scope.updateTitle = _=> {
         if (scope.editForm.title.$invalid) return;
         scope.onUpdate();
       }
     }
  };
});
