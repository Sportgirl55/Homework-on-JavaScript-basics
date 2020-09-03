"use strict"

String.prototype.isPalindrome = function () {
    let phrase = this.toUpperCase();
    for (let i = 0; i <= phrase.length / 2; i++) {
      if (phrase[i] === phrase[phrase.length - 1 - i]) {
        return true;
      } return false
    }
  };

console.log("А роза упала на лапу Азора".isPalindrome());




function getAverageMark(marks) {
    if (marks.length == 0) {
        return 0;
    };
    let sumOfMarks = 0;
        for (let i = 0; i < marks.length; i++) {
        sumOfMarks += marks[i]; 
    }
    let average = sumOfMarks / marks.length;
    let roundedAverage = Math.round(average);
        return roundedAverage;    
};
  
  


function checkBirthday(birthday) {
    let now = Date.now();
    let diff = now - Number(new Date(birthday));
    let age = diff / 31557600000;
    let verdict = (age > 18 ? true : false);
    return verdict;
};