"use strict"
console.clear();

// Задание 1


const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames () {
   return weapons.map(item => item.name);
}

function getCountReliableWeapons (num) {
     return weapons.filter(item => item.durability > num).length;
}

function hasReliableWeapons (num){
     return weapons.some(item => item.durability > num); 
}

function getReliableWeaponsNames (num) {
     return weapons.filter(item => item.durability > num).map(item => item.name);    
}

function getTotalDamage () {
     let sumOfAttack = weapons.map(item => item.attack);
     return sumOfAttack.reduce(function(sum, elem) {
          return sum + elem;
     }, 0);
}


// Задача 2

console.clear();

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}


function sum(...args) {
     sleep(100); 
     return args.reduce((sum, arg) => {
       return sum += +arg;
     }, 0);
   }


function compareArrays(arr1, arr2) {
     return arr1.length === arr2.length && arr1.every((num, index) => num === arr2[index]);
}

function memorize(fn, limit) {
     const memory = [];      
     return (...args) => {
          let found = memory.find(elem => compareArrays(elem.args, args));
          if (found) {
               return found.result;
          }
          let result = fn(...args);
               memory.push( {
                    args: args,
                    result: result
               });        
          if (memory.length > limit) {
               memory.shift();
          }  
          return result;
     }
};

