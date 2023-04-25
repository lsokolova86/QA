import {Mammalias} from "./Mammalies.js";

export class Predators extends Mammalias {
    constructor (name, eyes, skin, legs, claws, fangs, lungs){
            super(name, eyes, skin, legs)
               this.claws = claws;
                this.fangs = fangs;
                this.lungs = lungs;
             }
               canEatMeat(){
                console.log(`This predators can eat meat.`);
                console.log(`${this.name} has ${this.claws} claws, ${this.fangs} fangs and ${this.lungs} lungs.`);
            }
            canReproduceCubs(){
                console.log(`This predators can reproduce cubs`);
        }
    }
let animal2 = new Predators ('Wolf', 'blue', 'grey', 4, 4, 'medium', 'unhealthy');
        animal2.canEatMeat();
        animal2.canReproduceCubs();
