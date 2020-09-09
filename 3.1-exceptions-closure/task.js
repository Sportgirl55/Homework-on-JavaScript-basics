"use strict";

// Задача 1

const parseCount = (value) => {
  const numberOfGoods = Number.parseInt(value);
  if (isNaN(numberOfGoods) === true) 
    throw new Error ("Невалидное значение");
      return numberOfGoods;
};

const validateCount = (value) => {
  try {
    parseCount(value);
      return parseCount(value);
  } catch (e) {
      return (new Error ("Невалидное значение"));
  } 
};

// Задача 2


class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b)
      throw new Error ("Треугольник с такими сторонами не существует");
  }
  
  getPerimeter() {
    return this.a + this.b + this.c;
  };

  getArea() {
    const p = (this.getPerimeter() / 2);
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +square.toFixed(3);
  }
};

const getTriangle = (a, b, c) => {
  try {
    return new Triangle(a, b, c);
  } catch (e) {
      return {
        getArea: () => "Ошибка! Треугольник не существует",
        getPerimeter: () => "Ошибка! Треугольник не существует",
      };  
    } 
};
