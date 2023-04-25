           // Exercise 1
// Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 

// let num1 = 3;
// let num2 = 1;
// let operator = "+"
// switch (operator){
//     case "+":
//         console.log (num1 + num2)
//         break;
//     case "-":
//         console.log (num1 - num2)
//         break;
//     case "*":
//         console.log (num1 * num2)
//         break;
//     case "/":
//         console.log (num1 / num2)
//         break;
//     case "**":
//         console.log (num1 ** num2)
//         break;
//     default:
//         console.log ("Incorrect operator")
// }


             // Exercise 2
 // Попробуйте внедрить в свою программу с кофе вложенный if

// //coffee

// let cupSize;
// let smallCup = 'small cup';
// let mediumCup = 'medium cup';
// let largeCup = 'large cup';
// let coffeeType
// let type1 = 'cappuccino';
// let type2 = 'latte';
// let price = 4
// let espressoCycle

// coffeeType = type1;
// cupSize = smallCup;

// if (cupSize == smallCup){
//   espressoCycle = '1 shot of espresso'
// //  if (cupSize > mediumCup && largeCup){
// //     console.log (cupSize) }
// };
// if (cupSize == mediumCup){
//  espressoCycle = '2 shots of espresso' ;
//   price *= 1.5;
// }
// if (cupSize == largeCup){
//   espressoCycle = '3 shots of espresso' ;
//   price *= 2;
// };

// let order = `You chose a ${cupSize} of ${coffeeType}. 
// Follow the steps: `;
// let step1 = `Take a ${cupSize}`;
// let step2 = 'Take 1 capsule of coffee';
// let step3 = 'Place it in a coffee machine';
// let step4 = `Choose brew ${espressoCycle}`;
// let step5 = `Brew capsule directly to the ${cupSize}`;
// let step6 = 'Add milk into milk frother';
// let step7 = `Froth milk for ${coffeeType}`;
// let step8 = 'Quickly pour prepared hot milk and foam into cup';
// let orderPrice = `The order price is $${price}`;
// let result = 'Enjoy your coffee!';
//document.write (order, '<br>', step1,'<br>', step2, '<br>', step3, '<br>', step4, '<br>', step5, '<br>', step6, '<br>', step7, '<br>', step8, '<br>', '<br>', orderPrice, '<br>', '<br>', '<br>', result)
// console.log (order);
// console.log (step1);
// console.log (step2);
// console.log (step3);
// console.log (step4);
// console.log (step5);
// console.log (step6);
// console.log (step7);
// console.log (step8);
// console.log (orderPrice);
// console.log (result)

              // Exercise 3
// При помощи цикла for выведите чётные числа от 2 до 10

// for (let i=2; i<=10; i+=2)
// console.log (i)
// let word = "Good morning"
// for (let i=0; i<word.length; i+=1)
// // console.log (word.length)
// console.log (word[5])



         // Задача с интервью

// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’]

       // Creative Exercise 

// //Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

// let txt = ['Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr'];
// let result = '';

// for (let i = 0; i < txt.length; i++){
//     if (txt[i] - 'br') continue;

//     console.log (txt[i])}

// let fruits = ['apple', 'orange', 'plums', 'pear', 'grape'];
// for (i=0; i < fruits.length; i++){
//     if (fruits[i] == 'plums')
//     continue;
//     console.log (fruits[i])
// }

// let txt = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
// let result = '';
// for (let i = 0; i < txt.length; i++){
//     result = result + txt[i] - 'br'

// }
//     console.log (result)


// Задачка посложнее* 
//  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему

let str = 'Wake up and sing'
let code = ''
for (let i=0; i < str.length; i+=2){
    code = code + str[i] + 'a'
i++
}
console.log (code)

let str1 = 'Waeapanasaga'
let code2 = ''
for (i=0; i < str1.length; i = i+2){
    code2 += str1[i]
    
}
console.log (code2)




//christmas tree
// let txt = "";
// for (let i=0; i<=10; i++){
//     txt = "";
// for (j=i; i<10; j++){
//     txt += " "
// }
// for (k=0; k<(i*2)-1; k++){
//     txt += "*"
// }
// console.log (txt)
// }