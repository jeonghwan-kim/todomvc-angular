angular.module('todomvc').directive('todoForm', () => {
  return {
    restrict: 'E',
    scope: {
      create: '&',
    },
    template: `
      <ul><li>
        <form name="inputForm" ng-submit="create({title: newTodoTitle}); newTodoTitle=''">
          <input type="text" name="title" ng-model="newTodoTitle" autofocus
                 ng-trim="true"
                 ng-minlength="2"
                 ng-maxlength="10">
          <input type="submit" value="+" ng-disabled="!inputForm.title.$modelValue">
          <p class="warn-msg" ng-if="inputForm.title.$error.minlength">2글자 이상 입력하세요</p>
          <p class="warn-msg" ng-if="inputForm.title.$error.maxlength">10글자 이하로 입력하세요</p>
        </form>
      </li></ul>
      `
  };
});
