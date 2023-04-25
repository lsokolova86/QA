//const str = 'potato white';
//const str2 = '(123) 123-4567'
// const str1 = 'blueberries';
// const str2 = '06';
//console.log(str.concat(' ', str2, ' ', str1));

//padStart(length, otherStr)

// const str3 = str.padEnd(5, ' ');
// const str4 = str1.padEnd(5, " ");
// console.log(str3, '2.00');
// console.log(str4, '4.00');

// const arr = [];
// let count = 0;
// //let position = str.indexOf('o');
// let position = str.lastIndexOf('o') // index poslednego vhozhdeniya 
// while (position !== -1){
//     arr.push(position);
//     count++
//     //position = str.indexOf('o', position +1);
//     position = str.lastIndexOf('o', position -1)
// }

// str.indexOf('o')
// console.log(str.indexOf('tag')) // result -1 - means does not exist
// // helps to find any index in the string
// console.log(arr, count)


//============== STARTS WITH / ENDS WITH

//console.log(str.startsWith('white', 7)); // 7 - ukazivaem symbol posle kotorogo nuzhno smotret'

//console.log(str.endsWith('white '));
// zdes' dolzhno bit' uchteno kak napisano, chto bi chetko sovpadalo po napisaniyu, togda budet TRUE, inache false (v sluchae s 'white ' -zdes' stoit probel poetomu budet false)

//console.log(str.substring(0, 5)); // vozvrachaet podstroku iskomoi stroki mezhdu elementami kotorie zadayutsya kak parametri

//console.log(str.substring(5, 3).split('').reverse().join('')); 


//============= SLICE

//vozvrachaet fakticheski chto i substring, no rabotaet i s otrichatel'nimi indeksami

//console.log(str.slice(-9));

///==============REPLACE  

// console.log(str.replace('o', 'O'))
// console.log(str.replaceAll());
// console.log(str.replace(/o/ig, 'O'));
// console.log(str2.replace(/[0-9]/g, '*'));


//============ SPLIT
// const arr = [];
// let strRes = '';
// console.log(str.split('', 4)) // posle , vidaet parametr do kakogo nado ogranichit'
// for (let i=0; i<str.length; i++){
//     arr.push(str.charCodeAt(i))}
//     console.log(String.fromCharCode(111))
// console.log(arr);

// for (let i=0; i<str.length; i++){
//     strRes += String.fromCharCode(arr[i])
// }
// console.log(strRes);


//===================   OBJECTS

let obj = {}; // literal'noe ob'yavlenie
let objNew = new Object(); // sozdayut pustie objecti
obj['type'] = 'JS';
obj[1] = 'JS'; // key always string, should be in ""
obj[1] = 'Java' // esli key suchestvyet, perezadat' znachenie key, to ona zatret'sya i perezapishetsya
console.log(obj);

//for (let letter of str){ //esli mi idem cherez for...of.., to mi perebiraem elementi,
// esli idem cherez for...in to mi sozdaem indeksi
//     obj[letter] = letter;
// }
//console.log(obj)

let str = 'JavaScript';

obj['lastName'] = 'P'; // u object net poryadka
obj['firstName'] = 'Stan';

//obj['lastName'] = 'J.';
for (let i=0; i<str.length; i++){
    //obj[`key ${i}`] = str[i];
    obj[`key ${i}`] = str[i].repeat(i);// v znachenii object mozhet bit' vse chto ugodno hranit'sya
}
delete obj['firstName'] // delete udalayet key and value
for (let i=0; i<=10; i++){
    console.log({i}) // ({i : i}) tozhe samoe
    console.log({i, str}) 
}

console.log(obj);
console.log(obj['lastName']) // vsegda vivodm info po key





const user = {
    firstName: 'Stan',
    lastName: 'P',
}
Object.defineProperty(user, 'SNN', {
    value: 'XXX-XX-XXXX', enumerable: true , configurable: false, writable: true
})
user.firstName = 'Jane'
user.SSN = 'xxxxxxxx'