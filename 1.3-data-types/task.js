"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (!isNaN(percent, contribution, amount, date)) {
        console.log(`Параметр ${arguments} содержит неправильное значение ${arguments}`);
    }     
    let nowaday = new Date();
    let totalMonths = (date.getFullYear() - nowaday.getFullYear()) * 12 + (date.getMonth() - nowaday.getMonth());
    let creditBody = amount - contribution;
    let monthlyPayment = creditBody * (((percent / 12) / 100) + ((percent / 12) / 100) / (((1 + ((percent / 12) / 100)) ** totalMonths) - 1));
    let totalAmount = (monthlyPayment * monthlyPayment).toFixed(2);
    return totalAmount;
};




// Ежемесячная оплата рассчитывается по формуле: Платеж=S*(P+P/(((1+P)^n)-1)), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень

// Напишите функцию, которая будет принимать процентную ставку, сумму первоначального взноса, сумму кредита и срок (дату окончания кредита) в качестве аргументов и выдавать сумму, которую в итоге 
// заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом).

// function calculateTotalMortgage(percent, contribution, amount, date) {
//     if (arguments != Number)
//     console.log(`Параметр <название параметра> содержит неправильное значение <значение параметра>`);
//  let totalAmount = amount - contribution;
//     return totalAmount;
// }







function getGreeting(name) {
    if ( !name || 0 === name.length) {
        name = "Аноним";
    }
   let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
};
