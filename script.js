'use strict';

let randNumber = Math.floor(Math.random() * 101);
    console.log(randNumber);

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

function yourNumber() {
  let yourNum = prompt("Угадай число от 1 до 100");
  if (yourNum === null) {
    alert("Игра окончена");
  } else if (isNumber(yourNum)) {
    yourNum = +yourNum;

    if (yourNum > randNumber) {
        alert ("Загаданное число меньше");
    } else if (yourNum < randNumber) {
        alert ("Загаданное число больше");
    } else if (yourNum === randNumber) {
        alert ("Поздравляю, Вы угадали!!!");
        return yourNum;
    }
  } else {
    confirm ("Введи число!");
  }
  return yourNumber();
}

console.log(yourNumber());