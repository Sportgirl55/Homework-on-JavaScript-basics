"use strict";

function getResult(a,b,c){
    // код для задачи №1 писать здесь
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
        return [x, x1, x2];
    }
  
    return x;
}

function getAverageMark(marks) {
 
        var sum = 0;

        for (var i = 0; i < marks[i]; i++) 
        sum += marks[i];

        return sum == 0 ? sum : sum / arguments.length;
    }

    alert(getAverageMark( 3, 2, 3, 4, 5) );



//     if (marks.length == 0) {
//         return 0;
//     } if (marks.length > 5) {
//         marks.slice(0,4);
//     console.log("Оценок больше, чем 5. Учитываются первые 5");
//   } 

 
//   function sortArgs() {
//     var args = [];
//     for (var i = 0; i < arguments.length; i++)
//         args[i] = arguments[i];
//     return args;
// }
// sortArgs(4, 4, 5, 6, 7);

//     let averageMark = [];
//     for (let i = 0; i <= marks.length; i++) {
//         averageMark[i] = i + 1;
//     }
    
  
    
//     return averageMark;
// }

// function sa() {
    
//         var len = arguments.length;
//         if (len == 0)
//             return "X3";
//         var sum = 0;
//         for (var i = 0; i < len; i++) {
//             sum += +arguments[i];
//         }
//         return sum/len;
//     }
//     alert(sa(4, 2, 3));
//     alert(sa('4', '2', '3'));
//     alert(sa());
    

// var myString = 'Привет, мир. Как дела?';
// var splits = myString.split(' ', 3);

// console.log(splits);



function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}







// function kvur(a, b, c) {
//   let discr = (a, b, c) => b * b - 4 * a * c;
//   // Если значение дискриминанта квадратного уравнения < 0, то  корней на множестве действительных чисел нет. 
//   let d = discr(a, b, c);
//   if (d < 0) return [d];

//   let x1 = (-b + Math.sqrt(d)) / (2 * a),
//       x2 = (-b - Math.sqrt(d)) / (2 * a);

//   return [d, x1, x2];
// }





// function getResult(a,b,c) {
//   let res = [];
//   let D = b ** 2 - 4 * a * c;
//   if (D < 0) {
//     return [];
//   } if (D == 0) {
//     x1 = (-b) / (2 * a);
//         return res[x1];
//   }  else if (D > 0) {
//     let tmp = [];
//     tmp.push((-b + Math.sqrt(D)) / (2 * a));
//     tmp.push((-b - Math.sqrt(D)) / (2 * a));
//     res["quadratic roots"] = tmp;
// }
//     return res;
// };
// console.log(getResult());





//   let quadraticEquation = (a, b, c) => {
//     if(a == 0)
//         return false;
//     let res = {};
//     let D = b * b - 4 * a * c;
//     console.log('D = ' + D);
//     if(D < 0)
//         return false;
//     res['discriminant'] = D;
//     if(D == 0)
//         res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
//     else if(D > 0){
//         let tmp = [];
//         tmp.push((-b + Math.sqrt(D)) / (2 * a));
//         tmp.push((-b - Math.sqrt(D)) / (2 * a));
//         res["quadratic roots"] = tmp;
//     }
//     return res;
// }
// console.log(quadraticEquation(1,12,36));





