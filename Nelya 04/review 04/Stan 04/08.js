// const arr = [2, 6, 3, 28, 9, [49, 57]];
// console.log(arr.reduce((sum, el, i) => sum + i % 2 ===1 ? el: -el, 0));
// console.log(arr[5].pop());

// const arr = [2, 6, 3, 28, 9];
// console.log(arr.every(el => el > 3));
// console.log(arr.every((el, i) => i % 2 == 0 ? el > 0: el > 5))
// console.log(arr.some((el => el > 27)))
// console.log(Array.of(2, 6, 3, 28, 9).every((el, i, arr) => (i % 2 == 0 ? el > 0: el > 9)));
// //console.log(
//     // Array.of(2, 6, 3, 28, 9).every((el, i, arr) => arr.reduce(sum, el) => sum + el, 0) - el);

// console.log(
//     Array.of(2, 6, 3, 28, 9).map((el, i, arr) => i % 2 == 0 ? arr.reduce((sum, el) => sum + el, 0) - el : ''));

//========================================


//const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940, ":", '>', ';']
//const arrStr = ['a', 'bb', 'z', 'c', 'w', 't', 'A', 'H', 'D']
//arr.sort()
//sort() - DEFAULT A-Z
//sort().reverse() - from Z-A
//arrStr.sort()
//arrStr.sort().reverse();// sort menyaet massiv, chtobi sohranit" neobhodimo delat' copy, sorvirovka v alfavitnom poryadke, rassmatrivaem kak stroki
//console.log(arr)
//console.log(arrStr)

// sortirovka po vesu==============
//const arrNew = [
//     [1, 2],
//     [2, 2],
//     [1, 2],
//     [1, 205],
//     [3, 4],
//     [1, 0],
// //];
//arr.sort((num1, num2) => num1 - num2);//diapazon m.b. (a,b), lyuboe
//arr.sort((num1, num2) => num2 - num1);// v obratnom poryadke
// arrNew.sort(([a,b], [c,d]) => a - c).sort();
// console.log(arr)
// console.log(arrNew)

/// MAP - method =============
//const arr = [2, 6, 3, 27, 9, 56, 103, 1, 1001, 3940];
// const callback = (el, i) => {
//     if (i % 3 == 0 && el % 3 == 0){
//         return el / 3; 
//     }
//     return el;
// }
//let arrNew = arr.map(el => el % 3 == 0 ? el / 3 : el) //(el**2); // esli delit'sya na 3, to vivevti, esli net, to vivodit'sya obichnii element
//let arrNew = arr.map((el, i)  => i % 3 == 0 ? el % 3 == 0 ? el / 3 : el: el);
//let arrNew2 = arr.map(callback);
// console.log(arrNew);
// console.log(arrNew2)

// const arr = ['Stan', 'Java Script', '06'];
// const arr1 = [2, 6, 3, 27, 9];
//const result = arr.reduce((acc, el, i, arr) => i == 0 ? acc + el: acc + ' ' + el, '') 
//const result = arr.reduce((acc, el, i, arr) => el.length + acc, 0) 
//const result = arr1.reduce((acc, el, i, arr) => i % 2 == 0 ? acc + el : acc, 0) 
// acc = 0,
// el = 2, acc = 0 + 2 = 2
// el = 6, acc = 2 + 6 = 8
// el = 3, acc = 8 + 3 = 11
//console.log(result)

//==================================

//const arr = Array.from("JavaScript", el  => '*' + el + '*'); // same as line 54
//const arr = Array.from("JavaScript").map(el  => '*' + el + '*'); 

//const arr2 = Array.of(1, 'str', NaN, true, undefined);
// console.log(arr);
// console.log(arr2);

// Array.isArray()
// console.log(Array.isArray(arr2))

// const arr1 = [1, null, 3];
// const arr2 = [1, undefined, 3];
// console.log(arr1.toString(), arr2.toString());
// console.log (arr1.toString() == arr2.toString());

// console.log(JSON.stringify(arr1), JSON.stringify(arr2));
// console.log(JSON.stringify(arr1) == JSON.stringify(arr2));

// const compareArrays = (arr1, arr2) => {
//     return arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i])
// }
// console.log(compareArrays(arr1, arr2));


//==================================================


// const str = 'Stan';
// console.log(typeof str);
// const strNew = new String('Stan')
// console.log(strNew)
// console.log(typeof strNew)

// console.log(str == strNew);
// console.log(str === strNew);

// const str = 'Stan';
// const str1 = 'JS';
// const str2 = '06';
// console.log(str.concat(' ', str2, ' ', str1));
// //const bb = Number('44'); // klass obertki
// //console.log(bb);

// //padStart(length, otherStr)

// const str3 = str.padStart(9, '***'); // dopolni 5 simvolov k slovu Stan chto bi bilo 9 simvolov
// console.log(str3);
