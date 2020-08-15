 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	let algebra = a;
	let geography = g;
	let physics = p;
	let averageScore = (a + g + p) / 3;
	
    // реализуйте здесь задание №1
    
	return averageScore;// ваш ответ;
}

function sayHello(userName) {
	
    // реализуйте здесь задание №2
    let myName = userName;
    let message = `Привет, мир! Меня зовут ${userName}`
    
	return message;// ваш ответ;
}

function calculateFormula(x, y, z) {
    
	// реализуйте здесь задание №3
	x = 2;
	y = 22;
	z = 0;
	let result = (x * y) + (5 * z) + x - 1;
    
    return result;// ваш ответ;
}
