"use strict";
function getSolutions(a,b,c){
    let D = b ** 2 - 4 * a * c;
    let x1, x2;
    if (D < 0) {
      return { 
          D: D,
          roots: [ ]
      };
    } if (D == 0) {
      x1 = (-b) / (2 * a);
        return { 
          D: D,
          roots: [x1]
      };
    } else {
      x1 = (-b + Math.sqrt(D)) / (2 * a),
      x2 = (-b - Math.sqrt(D)) / (2 * a);
      return { 
          D: D,
          roots: [x1, x2]
      };
    }
};

function showSolutionsMessage( a, b, c ) {
     let result = getSolutions(a, b, c);
     console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
     console.log("Значение дискриминанта: " + result.D);
     if (result.D < 0) {
          console.log(`Уравнение не имеет вещественных корней`);
     } if (result.D == 0) {
     console.log("Уравнение имеет один корень X₁ = " + result.roots[0]);
     } else {
          console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
     }
};




function getAverageMark(marks) {
  if (marks.length == 0) {
    return 0;
};
    let sumOfMarks = 0;
    for (let i = 0; i < marks.length; i++) {
          sumOfMarks += marks[i]; 
    }
    let averageMark = sumOfMarks / marks.length;
      return averageMark;
};


function getAverageScore(data) {  
  if (data !== {}) {
    return {
    average: 0
   }
  } 

  const arrayOfMarks = {};
  let numberOfSubjects = 0;
  for (let subjects in data) {
    numberOfSubjects++;
  }
  let summed = 0;
  for (let i = 0; i < arrayOfMarks.length; i++) {
    summed += data[i];
  }
  let averageOfAllMarks = summed / numberOfSubjects;
  for (let key in data)  {
    arrayOfMarks[key] = getAverageMark(data[key]);
    arrayOfMarks.average = averageOfAllMarks;
  };
  return arrayOfMarks;
 };


 

//  var o = {a:1, b:34, c:352} //итд.
// function s(obj) {
// var rez = 0;
// for(key in obj) {
//  rez += obj[key];
//  }
// return rez;
// }

// alert(s(o));





