let numbers = [10, 20, 30, 40, 50];
let callbacks = [];

numbers.forEach(function (element, index) {
  callbacks.push(function(){
    return numbers[index];
  });
});

/* document.write(callbacks[1]()) */
console.log(callbacks[1]());