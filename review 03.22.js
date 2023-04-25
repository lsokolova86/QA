let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];
let fruits = ['apple', 'grape', 9, 7, 'pear']
//let newArr = [];
let greeting = function showMessage (){
   console.log ('hello') // doesn't work
}
function createArrayOfNumbers (list){
    let newArr = [];
for (let i = 0; i<list.length; i++){
    if (typeof list[i] == 'number'){
    if (list[i] == 88){
        continue
    }
        newArr.push(list[i])
continue}
}
//showMessage()
console.log (greeting())
//console.log ('Hello')
return newArr
//showMessage()
}
console.log (createArrayOfNumbers(arr))
//console.log (createArrayOfNumbers(fruits))

// for (let i = 0; i<arr.length; i++){
//     if (typeof arr[i] == 'number'){
//     newArr.push(arr[i])}
    
// }
// console.log (newArr)