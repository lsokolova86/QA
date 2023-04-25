// function sum (a, b = 7){
//     a = 3
//     let result = a + b
//     return result
// }
//  console.log (sum())
// let print = function (arg){
//     console.log (arg)
// }
// sum (3,6)
// print ('Hi')

// let result2 = print ('Hello')
// console.log (result2)

function login (email, pass){
    typeEmail(email)
    typePass(pass)
    clickSubmit()
}

let tree = ''
let x=7
let space = " "
let sum = 1
for (let i=1; i<=x; i++){
    tree += space.repeat(x-i) + "*".repeat (sum) + '\n'
    sum += 2
}
sum = x * 2 - 1
for (let i= x - 1 ; i>=1; i--){
    tree += space.repeat(x-i) + "*".repeat (sum -2) + '\n'
    sum -= 2
}
console.log (tree)