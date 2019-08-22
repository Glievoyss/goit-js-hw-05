"use strict";

// Напиши класс StringBuilder. На вход он получает один
// параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${
        this.followers
      } followers`
    );
  }

  get value() {
    return this._value;
  }

  append(value) {
    this._value = this._value + value;
  }

  prepend(value) {
    this._value = value + this._value;
  }
  pad(value) {
    this._value = value + this._value + value;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
