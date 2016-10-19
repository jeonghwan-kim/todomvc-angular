(() => {
  const app = angular.module('todomvc', []);

  app.controller('TodoCtrl', ($scope) => {
    $scope.msg = 'Hello world2'
  });
})()
