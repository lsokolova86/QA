import {Predators} from "./Predators.js";
class Feline extends Predators {
    constructor (name, eyes, skin, legs, claws, fangs, lungs){
        super(name, eyes, skin, legs, claws, fangs, lungs);
    }
       canMeow(){
        console.log(`This feline can meow.`);
        console.log(`${this.name} has ${this.claws} claws, ${this.fangs} fangs and ${this.lungs} lungs.`);
    }
    canWalkSmoothly(){
        console.loglog(`This feline can walk smoothly`);
}
}
let Prosha = new Feline('Tiger', 'green', 'fluffy', 4, 'sharp', 'long', 'healthy');
Prosha.canMeow()
Prosha.canEat()







