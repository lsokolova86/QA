// //let str = 'Hello World, how are you?'
// // for (let i=0; i<str.length; i++){
// //     console.log(str[i])
// // }
// // for (let i in str){
// // console.log(str[i])
// // }
// //let arr = ['Sam', 56, true, false, 2, 'Hello'];
// // for (let i=0; i<arr.length; i++){
// //     console.log(arr[i])
// // }
// // for (let i in arr){
// //     console.log(arr[i])
// // }

// // let person = {
// //     name: 'Anna',
// //     lastName: 'Smith',
// //     age: 20
// // }
// // for (let key in person){
// // console.log(person[key])}
// //let newObject = {}
// // newObject['id'] = 2;
// // newObject['number'] = 3;
// // newObject['name'] = 'John';
// // newObject['key'] = '#3';
// // delete newObject.name
// //for (let i=0; i<str.length; i++){
//    newObject[i+1] = str[i]
// //}
// //delete newObject[str.length -1]
// //console.log(newObject)
// //console.log(newObject.name)
// //console.log(Object.keys(newObject))

function getCount(str) {
    let vowels = 'aeiou'
    return str.split('').filter(el => vowels.includes(el)).length
  }
  console.log(getCount('abracadabra'))
  