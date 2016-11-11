const doSomething = f => setTimeout(() => f('value1'), 1);
doSomething(v => console.log('value:', v));

const doSomething1 = () => {
  return {
    then: f => setTimeout(() => f('value2'), 1)
  };
};
doSomething1().then(v => console.log('value:', v));

function Promise(fn) {
  var callback = null;
  this.then = function(cb) {
    callback = cb;
  };
  function resolve(value) {
    setTimeout(() => callback(value), 1);
  }
  fn(resolve);
}
const doSomething2 = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('value3'), 1);
  });
};
const promise = doSomething2();
//...
promise.then(v => console.log('value:', v));
