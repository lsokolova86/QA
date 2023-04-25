export class Mammalias {
    constructor (name, eyes, skin, legs){
        this.name = name;
        this.eyes = eyes;
        this.skin = skin;
        this.legs = legs;
     }
       canEat(){
        console.log(`This Mammalias can eat milk.`);
        console.log(`${this.name} has ${this.legs} legs, ${this.eyes} eyes and ${this.skin} skin.`);
    }
}
let animal1 = new Mammalias('Cow', 'green', 'brown', 4);
animal1.canEat();


