// let height = 7;
// let halfTree = height - 1;

// for (let i=0; i < height; i++){
//     let line = "";
// }

// //loop for ""
// // i - # line
// let i = 0
// let line 
// for (let j=0; j < halfTree-i; j++){
//     line += " "
// }
// //loop for "*"
// for (let j = 0; j < 2*i +1; j++){
//     line += "*"
//         console.log (line)
// }

//function myPrint(name) {
    // return name;
//}


// let arr = [];
// arr [0] = 10;
// arr [1000000] = 1;
// console.log (arr)

//function myPrint(name) {
    // return name;
//}

// let name;
// name = name ?? ''
// console.log (name)
// if (name) {
//     console.log (name);
// }

// let num = 6.9873;
// //console.log (Math.sign(num))
// if (num < 0){
//     console.log (-1);
// }
// console.log (num < 0 ? -1 : 0)
// Math . round(), floor(), ceil(), trunc()
// num.tofixed(param)
// let newNum = num.toFixed (2)
//console.log (num.toFixed(2) * 1 + 10)
// console.log (typeof newNum)
// console.log (0.1 + 0.2)
// console.log (newNum *1 + 0.1)

// let a = 'a', b= 'b';
// console.log (b/a + a)
// console.log (b + a + b/a + a)

// for (let i=0; i <= 10; i++){
//     if (i == 5) {
//         console.error (i);
//     } else {
//         console.log (i)
//     } 
// }

//let name = ['Javascript', 'java', [1, 2, 3], false]
//console.table (name)
// udobno dlya obyektov
// console.log (`%c${className}`, 'color: blue; font-size: 48') // check in console log and on site
// let result = 0
// console.time ();
// for (let i = 0; i < 10000000; i++){
//     result++
// }
// console.timeEnd ()
// let name = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
// console.error (name)

const arr = [12,46, 2, 39, 4298, 645];
console.log (arr)
for (let i = 0; i < arr.length - 1; i++){
for (let j = i+1; j < arr.length; j++){
    if (arr[i] > arr[j]){
        let temp = arr[i];
        arr [i] = arr [j];
        arr [j] = temp;
    }
}
}
console.log (arr)
