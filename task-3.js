/*

Реализовать модуль, который работает со строкой и имеет методы:

установить строку
если передано пустое значение, то установить пустую строку
если передано число, число привести к строке
получить строку
получить длину строки
получить строку-перевертыш
Пример:

модуль.установитьСтроку(‘abcde’);

модуль.получитьСтроку(); // ‘abcde’

модуль.получитьДлину(); // 5

*/

console.log('Задача № 3');


const calkAll = (function () {
  let number;

  function setNumber(num) {
    return (number = num);
  }

  function addNumber(num) {
    return (number += num);
  }

  function multiplyNumber(num) {
    return (number *= num);
  }

  function subtractNumber(num) {
    return (number -= num);
  }

  function divideNumber(num) {
    return (number /= num);
  }

  function degreeNumber(num) {
    number = Math.pow(number, num);

    return number;
  }

  function getNumber() {
    number = number.toFixed(2);

    return number;
  }

  return {
    setNumber,
    addNumber,
    multiplyNumber,
    subtractNumber,
    divideNumber,
    degreeNumber,
    getNumber,
  };
})();

console.log(calkAll.setNumber(10));
console.log(calkAll.addNumber(5));
console.log(calkAll.multiplyNumber(2));
console.log(calkAll.subtractNumber(10));
console.log(calkAll.divideNumber(4));
console.log(calkAll.degreeNumber(3));
console.log(calkAll.getNumber());