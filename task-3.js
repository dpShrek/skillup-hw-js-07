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

const moduleString = (function () {
  let str;

  function setString(string) {
    if (string === undefined) {
      str = "";
    } else if (typeof string === "number") {
      str = toString(string);
    } else {
      str = string;
    }

    return str;
  }

  function getString() {
    return str;
  }

  function getStringLength() {
    return str.length;
  }

  function getFlipString() {
    let flipString = "";

    for (let i = str.length - 1; i >= 0; i--) {
      flipString += str[i];
    }

    return flipString;
  }

  return {
    setString,
    getString,
    getStringLength,
    getFlipString,
  };
})();

console.log(moduleString.setString("abcd"));
console.log(moduleString.getString());
console.log(moduleString.getStringLength());
console.log(moduleString.getFlipString());
