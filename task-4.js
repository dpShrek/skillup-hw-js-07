/*

Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10

модуль.прибавить(5); // значение += 5

модуль.умножить(2); // значение *= 2

модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:

модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

*/

console.log('Задача № 4');

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
