"use strict";

// Testing Webpage
console.log('Hello World!')

// 1. Variables
var dayOfWeek = 'Monday';
console.log(dayOfWeek)

var dayOfWeek = 'Friday';
console.log("I can't wait for Friday!")

// 2. User Input
let animalInput = (prompt("What is your favorite animal?"));
let colorInput = (prompt("What is your favorite color?"));
console.log(`I've never seen a ${colorInput} ${animalInput} before!`)

// 3. Conditionals
// Meals
// Favorite Breakfast: Bacon, Egg, and Cheese sandwich with Ketchup!
// Favorite Lunch: Chick-Fil-A Spicy sandwich with medium fries
// Favorite Dinner: White rice, red beans, and stew chicken

let timeOfDay = 1300;
let timeToEat = ''

if(timeOfDay < 1200){
    return timeToEat = 'Bacon, Egg, and Cheese sandwich with Ketchup';
}else if(timeOfDay >= 1200){
    return timeToEat = 'Chick-Fil-A Spicy sandwich with medium fries';
}else
{
    return timeToEat = 'White rice, red beans, and stew chicken';
}

// Random Number
var randomNumber = Math.floor(Math.random() * 10 + 1); 
    if (randomNumber <= 2){
        return console.log('Beatles')
    } else if (randomNumber = 3){
        return console.log('Stones')
    }else if (randomNumber = 4){
        return console.log("Stones")
    }else if (randomNumber = 5){
        return console.log('Stones')
    }else if (randomNumber = 6){
        return console.log('Floyd')
    }else if (randomNumber = 7){
        return console.log('Floyd')
    }else if (randomNumber = 8){
        return console.log('Floyd')
    }else {
        return console.log('Hendrix')
    }
        



