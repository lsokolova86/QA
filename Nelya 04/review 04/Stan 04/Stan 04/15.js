// let str = 'Some string';
// console.log(str.length);
// let strNew = new String('Something new');
// console.log(strNew);

let log = console.log;
// let obj = {};
// obj.name = 'Anna';
// obj.occupation = 'student';
// obj.introduce = function(){
//     log(`Hello, I'm ${this.name}`);
//     log(`I'm a ${this.occupation}`);
//     //return this.name;
// }
// log(obj)
//obj.introduce()

// let objNew = {
//     name: 'Anna',
// occupation: 'student',
// introduce: function(){
//     log(`Hello, I'm ${this.name}`);
//     log(`I'm a ${this.occupation}`); // this ssilaemsya na kakoe-to pole vnutri skobok
// } ,
// };
// log(objNew);

// let obj1 = {
//     name: 'Serj',
//     age: 32,
//     show: function(){
//         return (`Name: ${this.name}, age: ${this.age}`)
//     },
// };

// let obj2 = {
//     __proto__: obj1,
//     occupation: 'Teacher',
//     show() {
//         return (`Name: ${this.name}, age: ${this.age}`);
//     }
// }
// log(obj1);
// log(obj1.name);
// log(obj2);
// log(obj2.name);
// log(obj1.age);
// log(obj1.show());
// log(obj2.age);
// log(obj2.show());
// log(obj2.valueOf());

// let obj3 = {
//     rewards: [2022],
//     __proto__: obj2
// }
// log(obj3);
// log(obj3.name);
// log(obj3.occupation);

class Person_1 {  // class
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {  // method
        log(`Hello, I'm ${this.name}`);
        log(`I'm a ${this.age}`);    
}
}
let p2 = new Person_1('Olga', 23);
p2.introduce();

// function Person(name, age){
//     this.name = name ?? 'Unknown';
//     this.age = age;
//     //this.occupation = occupation ?? 'unemployed';
//     this.introduce = function(age){
//     log(`Hello, I'm ${this.name}`);
//     log(`I'm a ${this.age}`);
// }
// }

class Worker_1 extends Person_1 {
    constructor (name, age, occupation) {
       super(name, age);
       this.occupation = occupation;
    }
    introduce() {  // method
        super.introduce()
        log(`Hello, I'm ${this.name}`);
        log(`I'm working as a ${this.occupation}`);    
}
}
let w2 = new Worker_1('Serj', 65, 'Teacher');
w2.introduce();

class Manager_1 extends Worker_1 {
    constructor (name, age, occupation, role) {
        super (name, age, occupation);
        this.role = role;
    }
    introduce() {
        super.introduce()
        log(`Hello, I'm ${this.name}`);
        log(`I'm working as a ${this.occupation}`); 
        log(`I'm working as a ${this.role}`);   
}
}
let m2 = new Manager_1('Anton', 43, 'teacher', 'principal');
m2.introduce();


function Worker(name, age, occupation){
    Person.call(this, name, age);
    this.occupation = occupation;
    //this.occupation = occupation ?? 'unemployed';
    this.introduce = function(){
    log(`Let me introduce myself, I'm ${this.name}`);
    log(`I'm working as a ${this.occupation}`);
}
}// class konstructor vsegda s bol'shoi bukvi, sozdaetsya class Person
function Manager(name, age, occupation, role){
    Worker.call(this, name, age, occupation);
    this.role = role;
    this.greet = function(){
        log(`Let me introduce myself, I'm ${this.name}`);
        log(`I'm working as a ${this.occupation}`);
        log(`I'm working as a ${this.role}`);
}
}
//let p1 = new Person('Anna', 17);
//let w1 = new Worker('John', 45, 'Teacher');
//let m1 = new Manager('Maria', 32, 'Teacher', 'Principal');

//log(p1);
//log(w1);
//w1.officialGreeting();  //mozhno perenaznachat' znachenie metoda? - Polimorfizm
//w1.introduce();
//m1.greet();

//let person1 = new Person('john');
// let person2 = new Person('Serj', 32);
// let person3 = {name: 'Serj', occupation: 32};
// log(person1);
// log(person1.name);
// log(person1.occupation);
// log(person1.introduce(69));
// log(person2);
// log(person3);
// log(typeof person1);
// log(person2 instanceof Person);
// log(person3 instanceof Person); // true only if you create through new Person


class Person {  // class
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {  // method
        log(`Hello, I'm ${this.name}`);
        log(`I'm a ${this.age}`);    
}
}
let expectedName = 'Olga';
let expectedAge = 54;
let p3 = new Person (expectedName, expectedAge);
log(p3.name == expectedName);
log(p3.name);

class Person3 {
    // name
    constructor(name) {
        this._name = name;
    }
    introduce() {
        log (this.#greeting)
        log(`Hello, I'm ${this._name}`)
    }
    #greeting = 'Hello';
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
let P3 = new Person3('Stan');
log(P3);
P3['#greeting'] = 'Hi';
P3.name = 'Steven';
log(P3);
P3.introduce();
