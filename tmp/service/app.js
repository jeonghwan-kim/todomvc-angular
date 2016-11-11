const app = angular.module('myapp', [])

/**
 * provider
 */
app.provider('hello', function(){
  var defaultGreeting = 'hello';
  this.setGreeting = function(newGreeting) {
    defaultGreeting = newGreeting;
  }
  console.log('init provider')

  //프로바이더 함수는 $get 메소드를 구현해야한다. 추후에 $injector에 의해 호출된다.
  this.$get = function(){
    console.log('$get');
    return {
      say: function(name) {
        return `${defaultGreeting} ${name}`;
      }
    };
  };
});
app.config(function(helloProvider) {
  console.log('config')
  helloProvider.setGreeting('Halo');
});

/**
 * factory
 */
// app.factory('hello', () => ({
//   console.log('hello factory')
//   say(name) {return `Hello ${name}`;}
// }));

/**
 * service
 */
// app.service('hello', function(){
//   console.log('hello service')
//   this.say = function (name) {return `Hello ${name}`;}
// });


app.controller('MyCtrl1', function ($scope, hello) {
  $scope.msg = hello.say('chris1');
});
app.controller('MyCtrl2', function ($scope, hello) {
  $scope.msg = hello.say('chris2');
});
