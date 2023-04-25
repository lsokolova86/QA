// // let count = 0;
// // function recursion (){
// // // let count = 0;
// //     count++;
// //     console.log(count);
// //     if (count > 50) {
// //         return}
// //     recursion()
// // }
// // recursion()

// //1! = 1
// //2! = 1*2
// //3! = 1*2*3

// function factorial_1(n){
//     let p = 1;
//     for (let i=1; i<=n; i++){
//         p *= i
//     }
//     console.log(p)
// }
// factorial_1(5);

// let result = 1;
// function factorial_2(n){
//     if (n == 0) return;
// result *= n;
// factorial_2(n-1);
// }

// factorial_2(5)
// console.log(result)


// function factorial_3(n){
//     return n == 1 ? 1 : n*factorial_3(n-1);
// }
// console.log(factorial_3(100))

//3! = 1*2*3
// n = 3 -> 3 * factorial(2) -> 3*2 -> 6
// n = 2 -> 2 * factorial(1) -> 2*1 -> 2
// n = 1 -> 1
//stack:
//factorial(1)
//factorial(2)
//factorial(3)


// Fibonacchi

//0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//0  1  2  3  4  5  6  7   8
// function fib(n){
// if (n==0) return 0;
// if (n==1) return 1;
// return fib(n-1) + fib(n-2);
// }
// console.log(fib(8))


// Zamikanie  (Closure)    kod zamikaem v drugoi funkcii
// function counter(){
// let count = 0;

// return function createCount(){
//     //let count = 0;
//     count++;
//     console.log(count);
// };
// }
// createCount();
// createCount();
// count = 10;
// createCount();
// //console.log(count)
// let counter1= counter();
// let counter2 = counter();
// //console.log(counter1)
// counter1();
// counter1();
// counter1();
// counter1();
// counter2();
// counter2();
// counter2();
// counter2();

// (function hello(){
//     console.log('Hello')
// })()

// function generate(seed){
//     var private = seed;
//     return function (param){
//         private += seed;
//         return private + param;
//     };
// }
// var a = generate(1);
// var b = generate(2);
// //a(1) + a(2) + b(3) + b(4);
// console.log(a(1) + a(2))
// a. 10
// b. 15
// c. 17
// d. 21


// const arr = [12, 4, 8,,,,];  //[]lyuterali
// const arr1 = new Array(10, 6, false, 'str');  //esli ukazano odin parameter to eto dlina massiva, esli bol'she opredelyaet massiv i napolnyaet ego.
// const arrNew = [];
// arr.length = 2;
// console.log(arr1.length)
// console.log(arr1.length-1)

//pop/push   shift/unshift

// arr1.push(678, 'tru', true)
// console.log(arr1)
// //arr1.unshift(678, 'tru', true)
// console.log(arr1)
// console.log(arr1.shift())
// console.log(arr1)
// console.log(arr1.unshift(678, 'tru', true))
// console.log(arr1)

//concat 
// const arr = new Array(10, 6, false, 'str');  
// const arrNew = [2, 3, 4];
// const arrr = [true, false, NaN];
// const arr3 = arr.concat(arrr, arrNew, 'Hello');
//console.log(arr3)

//reverse
// console.log(arr.reverse()); // povorachivaet neobratimo
// console.log(arr)


//split, join 
// let str = 'Hello Java Script';
// let arr2 = str.split('');
// console.log(arr2);
// let newStr = arr2.join(' ')
// console.log(newStr);
// console.log(typeof newStr)
//console.log(str.split(' ').join(' '))


// I
//   I
//     I

// function createStair (n){
//     let str = '';
//     //let arr = [];
//     for (let i=0; i<=n; i++){
//     str += ' '.repeat(i) + 'I' + '\n'
//     //arr.push(' '.repeat(i) + 'I' + '\n')
// }
// return str;
// }
// console.log(createStair(5));

//slice, splice

// const arr = ['t', 'e', 's', 't'];
// const arrNew = arr.slice(1,3); // sozdanie kopii massiva
// const arrNew1 = [arr[1], arr[3]];
// console.log(arr + arrNew)
// console.log(arr.slice(0,2), arr.slice(2))
// arr[0] = 'T';
// console.log(arrNew);
// arr.splice(-2, 2, 'T', 'E', 'S', 'T')
// //console.log(arr.splice(0,1, 'T'))
// console.log(arr);

// const arr = 'Hello World'.split('');
// const arr1 = ['1', NaN, 2, false];
// let idx = arr1.includes(3);
// console.log(idx)
// if (arr.indexOf('l') === arr.lastIndexOf('l'))
// console.log('Unique')
// //console.log(arr.lastIndexOf('l'))

// function squareSum(numbers){
//     let sum = 1;
//     for (let i=0; i < numbers.lenght; i++){
//         sum += numbers**2
//   return sum
// }
//   console.log(sum)
//   }
//   squareSum(1,2)
// console.log(sum)