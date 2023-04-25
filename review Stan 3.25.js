// let str = 'Hello'
// //console.log (printName(10, sum(20, 50)))
// // console.log (result)
// console.log (printName())   // console can be read anywhere (here before declared fuction or after)
// function printName(){
//     return 'JavaScript'
// }
// //console.log (printName())

// let result = printName();
// // console.log (result)
// // console.log (printName())

// function nameOfTheFunction(){  // тело функции задана вся функции
// return //must be here, may be more than one in one function's body
// }
// function printName(a, b){
// //str = "Hey"
// //let str = "Hellooo" // because of locality, can be declare again
// // let num1 = 10;
// // let num2 = 20;
// // return num1 + num2
// // console.log (num1 + num2)
// return name() + a + b 
// // return "Hi!" + 10 + 20 because there is string, can't do "+"
// // return a + b + name() => return 30 + "Hi!" bacause see + before, then see the string
//     return name() + " " + "Java" + " " + str      // read only last declared functions, change from first declared to last one
//     function name(){  // can be before or after return
//         return "Hi!" 
     
// }
// }

// function sum (num1, num2){
//     return num1 + num2;
// }
// console.log (printName(10, sum(20, 50)))
// //console.log (printName(10, 20, 30, 40)) // because just 2 parameters was declared, so we can see only 2 first parameters
// //console.log (" " + 10 + 20)
// //console.log (str)
// //console.log (num1 + num2)
// // function name(){
// //     return "Hi!"   // fuction in fuction (can be here or in fuction itself)
// // }

// //name() //name outside of fuction can be visible

// function printInfo(){
//     console.log ("******");
//     console.log ("1");
//     console.log ("2");               //show on screen
//     console.log ("3");
//     console.log ("4");
//     console.log ("5");
//     console.log ("------");
// }
// console.log (printInfo())
// printInfo();
// printInfo();

//-----------------------------
//function expression

//console.log (printName('Li')) //function should be declare BEFORE use/ show on screen
const printName = (name) => {   //const or let
   let greeting = `Hello ${name}`;
   console.log ('Good morning ' + greeting)
}
// let printNew = printName
console.log (printName('Li'))
// console.log (printNew())

const sum = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;
console.log (sum(10, 20))


//----------
function addition (num1, num2){
    return num1 + num2;
}
const product = (num1, num2) => num1 * num2;

//function result (num1, num2, callback){ //CALLBACK - when function argument goes to different function (can be different names (maybe something)) 
   // return callback(num1, num2)
//}
//console.log (result(10, 20, product)); //product - type of peremennoi, contain function inside

function result (callback, num1, num2){
    return callback(num1, num2);
}
//console.log (result((num1, num2) => num1 + num2), 10, 20);
console.log (result(10, 20, (a, b) => a +b));