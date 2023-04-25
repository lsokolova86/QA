const COFFEE_BLEND_1 = '100% Arabica';
const COFFEE_BLEND_2 = '90% Arabica + 10% Robusta';
const WATER_SMALL = '25 ml';
const WATER_MIDDLE = '150 ml';
const WATER_BIG = '300 ml';
const PRICE_START = 3.95;
const CUP_SMALL = 'Small';
const CUP_MIDDLE = 'Middle';
const CUP_BIG = 'Big';



function getRecipe(nameOfCoffee, coffeeBlend, cup){  

    function getBlend(coffeeBlend){
        if(coffeeBlend == COFFEE_BLEND_1) return COFFEE_BLEND_1;
        else if (coffeeBlend == COFFEE_BLEND_2) return COFFEE_BLEND_2;
        return 'Coffee Blend is unknown';
    }

    function getWater(cup){
        let water = WATER_BIG;
        if (cup === CUP_SMALL) water = WATER_SMALL;
        else if (cup === CUP_MIDDLE) water = WATER_MIDDLE;
        return water;
    }

    function getPrice(cup){
        let price = PRICE_START;
        if (cup === CUP_BIG) price = price + 2;
        else if (cup === CUP_MIDDLE) price = price + 1.5;
        return price;
        }

console.log(`So, you chose is ${nameOfCoffee} from ${getBlend(coffeeBlend)} in ${cup} cup.`);
console.log(`Price of this coffee is $${getPrice(cup)}.`)
console.log('This is instruction how you can make coffee with these coffee maker.');
console.log(`1. Take a ${cup} cup and put it into the coffee maker.`);
console.log(`2. Press the icon "Start" on the screen.`);
console.log(`3. After a while, coffee maker prepare ${getWater(cup)} delicious ${nameOfCoffee} from ${getBlend(coffeeBlend)}.`);
console.log(`4. When ${nameOfCoffee} is done, you will see "Ready" on the screen.`);
console.log(`5. Enjoy your coffee!`);
}

getRecipe('Americano', COFFEE_BLEND_1, CUP_SMALL);