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
                 ng-maxlength="30"
                 todo-text-validator >
          <input type="submit" value="+" ng-disabled="!inputForm.title.$modelValue">
          <ul class="warn-msg">
            <li ng-if="inputForm.title.$error.minlength">2글자 이상 입력하세요</li>
            <li ng-if="inputForm.title.$error.maxlength">30글자 이하로 입력하세요</li>
            <li ng-if="inputForm.title.$error.todoText">카테고리를 입력하세요(:work angularjs study)</li>
          </li>
        </form>
      </li></ul>
      `
  };
});
