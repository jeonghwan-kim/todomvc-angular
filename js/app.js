angular.module('todomvc', ['ngRoute'])

angular.module('todomvc')
    .config($routeProvider => {
      const routeConfig = {
        controller: 'MainCtrl',
		    templateUrl: 'templates/main.html'
      };

      $routeProvider
        .when('/', routeConfig)
        .when('/:status', routeConfig)
        .otherwise({
          redirectTo: '/'
        });
    });
