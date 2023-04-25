// --------   ==; === --------- compare arrays

// let arr = [1, 2];
// let arr1 = ["a", "b"];

// console.log(arr == arr1);
// console.log(arr > arr1);
// console.log(arr < arr1);

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// const a1 = [1, 2, 7];
// const b1 = [1, 2, 6];

//let a2 = a1.join();
//let b2 = b1.join();

//console.log(JSON.stringify(a1) == JSON.stringify(b1)) //compare string
//console.log(JSON.stringify(a1))
//console.log(b.toString() === a.toString());

// let z = b.toString();
// let x = JSON.stringify(b)
// console.log(x)

//======

// let arr = [0, 2, 3];
// let emptyArr = [];
// emptyArr.push(1, 5, 7);
// emptyArr.push(1, 3, 5, 'f');
// emptyArr[0] = "A";
// console.log(emptyArr);
// let str2 = 
// console.log(String(arr), "/", String(emptyArr));
// console.log(Number(...arr), Number(emptyArr));
// console.log(Boolean(arr), Boolean(emptyArr));

//============= Objects ============

// let user = {};
// let obj = {
//     name: 'Bob',
//     'age': 21,
//     'isAdult': true,
//     salary: underfined,

// }

// let user = new Object();
// let user1 = {
//     name: 'John',
//     age: 30,
//     'high school': true
// }
// console.log('original', user1);

// user1.age = 20;
// user1.name = 'Bill';
// console.log('modified', user1);
// console.log(user1['high school'])   // libo user1.high_school (neobhodimo izmenit' strochku 55)


// dobavleno svoistvo address:
// user1.address = {
//     city: 'SF',
//     state: 'CA',
//     country: 'USA'
// }
// user1.hello = 'Hi'; // user1['hello'] = 'Hi' same
// console.log('added new key - address and Hello', user1)
// console.log(user1.address.state)

//======= Delete

// delete user1.address.country; //udalenie svoistva country
// console.log('deleted', user1)


//========== Obrachenie k svoistvam =====



//=========== Dobavlenie svoistva (property)

// const obj = {};
// console.log(obj);
// //prisvaivaem znacheniya
// obj.name = 'Jess'; // cherez tochku arr[0] = 'Jess'
// console.log(obj);

// obj['likes read'] = true; // cherez skobki []
// console.log(obj);

// obj['age'] = 28;
// console.log(obj);

// let carModel = 'mini'; // cherez peremennuyu
// let  num = 1;
// obj[carModel] = num;$
// obj['carModel']  = 3;
// console.log(obj)

//====== Sozdanie objekta s ispol'zovaniem peremennoi 

// let name1 = 'Anna';
// let age = 17;
// const user3 = {
//     [name1]: name1,
//     age: age
// };
// console.log(user3)

//====== Obrachenie k svoistvam elementa

// let arr2 = [1, 3, 5, 7];
// const customers = [
//     id: '02'
// ]



