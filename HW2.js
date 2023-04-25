                // Exercise 1.1
                //------------

// let month
// month = 'Janiuary'
// if (month == 'July' || month == 'August'){
//   console.log ('Accepted')
// }
// else {
//   console.log ('Denied')
// }

                 // Exercise 1.2
                //calculator

// let num1 = 2;
// let num2 = 0;
// let operator = "/";
// if (operator == "+"){
//   console.log (num1 + num2)
// };
// if (operator == "-"){
//   console.log (num1 - num2)
// };
// if (operator == "*"){
//   console.log (num1 * num2)
// };
// if (operator == "/" &&  num1 || num2 !== 0){
//   console.log (num1 / num2)
// };
// else {
//   console.log ('Wrong number')
// }

             // Exercise 1.3 

// Решите задачу с помощью пройденных тем:
// «Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»

let wall = 5;
let dayShift = 3;
let nightShift = -2;
let days = 0
let distanceForDay = dayShift + nightShift
for (i=1; i < wall; i++){
       distanceForDay += dayShift + nightShift
       if (dayShift + nightShift <= wall)
       days++
console.log (`Snail will get up on ${distanceForDay} meter(s) in ${days} day`)}
if (distanceForDay == wall)    
 nightShift-=
  console.log ('Finish')



          // Creative Exercise
                 //coffee

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
// cupSize = mediumCup;

// if (cupSize == smallCup){
//   espressoCycle = '1 shot of espresso'; 
// };
// if (cupSize == mediumCup){
//  espressoCycle = '2 shots of espresso' ;
//   price *= 1.5;
// }
// if (cupSize == largeCup){
//   espressoCycle = '3 shots of espresso' ;
//   price *= 2;
// };

// let order = `You chose a ${cupSize} of ${coffeeType}  <br> <br> Follow the steps: <br>`;
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
// document.write (order, '<br>', step1,'<br>', step2, '<br>', step3, '<br>', step4, '<br>', step5, '<br>', step6, '<br>', step7, '<br>', step8, '<br>', '<br>', orderPrice, '<br>', '<br>', '<br>', result)

