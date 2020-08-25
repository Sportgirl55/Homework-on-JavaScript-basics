"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (!Number(percent))  {
        return("Параметр \"Процентная ставка\" содержит неправильное значение " + percent);
}
//     if (!Number(contribution)) {
//         return(`Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}`);
// }

// Не проходит 3 из 5 проверок. Хотя в коде всё то же самое, что и у двух других аргументов.

    if (!Number(amount)) {
        return(`Параметр "Сумма кредита" содержит неправильное значение ${amount}`);
} 


    let totalMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    let creditBody = amount - contribution;
    let monthlyPayment = creditBody * (((percent / 100) / 12) + ((percent / 100) / 12) / (((1 + ((percent / 100) / 12)) ** totalMonths) - 1));
    let totalAmount = +(totalMonths * monthlyPayment).toFixed(2);
    return totalAmount;
};



function getGreeting(name) {
    if ( !name || 0 === name.length) {
        name = "Аноним";
    }
   let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
};
