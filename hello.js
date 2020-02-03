// const sayHello = function() {
//   console.log('Hello, world');
// };

// sayHello();

// const sayHello = function(name) {
//   console.log('Hello, ' + name);
// };
// sayHello('John');

// const sayHelloToConsole = function(name) {
//   console.log('Hello, ' + name);
// };
// sayHelloToConsole('Rance');

const sayHelloToConsole = function(name) {
  return 'Hello, ' + name;
};
const greeting = sayHelloToConsole('Rance');
console.log(greeting);
