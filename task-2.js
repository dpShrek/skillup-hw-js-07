/*

Подсказка, функция minus должна возвращать другую функцию. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)

*/

console.log('Задача № 2');


function multiplyMaker(aaa) {
    let res = aaa;
  
    return function (bbb) {
      res *= bbb;
  
      return res;
    };
  }
  
  const multiply = multiplyMaker(2);
  
 
console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)