"use strict";

function getResult(a,b,c){
 
    let discriminant = (a, b, с) => b ** 2 - 4 * a * c;
    let x = discriminant(a, b, c);
    let x1, x2;
    if (x < 0) {
      return [];
    } if (x == 0) {
      x1 = (-b) / (2 * a);
        return [x1];
    } else {
      x1 = (-b + Math.sqrt(x)) / (2 * a),
      x2 = (-b - Math.sqrt(x)) / (2 * a);
        return [x1, x2];
    }
    return x;
};

function getAverageMark(marks) {
    let sumOfMarks;
    let len = marks.length;
    let averageMark = sumOfMarks / len;
    if (len == 0) {
        return 0;
    } if (len > 0 && len <= 5) {
        for (let i = 0; i <= 5; i++) {
            sumOfMarks += marks[i];
            return averageMark;
        }
    } else if (len > 5) {
        marks.splice(5);
        for (let i = 0; i <= len; i++) {
        sumOfMarks += marks[i];
        console.log("Оценок больше, чем 5. Учитываются первые 5"); 
        }
    }
    return averageMark;  
};






function askDrink(name, dateOfBirthday) {
    let nowaday = new Date();
    let nowYear = nowaday.getFullYear()
    let yearOfBirth = dateOfBirthday.getFullYear();
    let age =  nowYear - yearOfBirth;
    let result;
    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
};






