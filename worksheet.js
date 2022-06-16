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
let timeToEatBreakfast = 'Breakfast: Bacon, Egg, and Cheese sandwich with Ketchup!'
let timeToEatLucnch = 'Lunch: Chick-Fil-A Spicy sandwich with medium fries'
let timeToEatDinner = 'Dinner: White rice, red beans, and stew chicken'

if (timeOfDay < 1200){
    console.log(timeToEatBreakfast);
}else if(timeOfDay >= 1200){
    console.log(timeToEatLucnch);
}else
{
    console.log(timeToEatDinner);
}

// Random Number
var randomNumber = Math.floor(Math.random() * 10 + 1); 
    if (randomNumber <= 2){
        console.log('Beatles')
    } else if (randomNumber = 3){
        console.log('Stones')
    }else if (randomNumber = 4){
        console.log("Stones")
    }else if (randomNumber = 5){
        console.log('Stones')
    }else if (randomNumber = 6){
        console.log('Floyd')
    }else if (randomNumber = 7){
        console.log('Floyd')
    }else if (randomNumber = 8){
        console.log('Floyd')
    }else {
        console.log('Hendrix')
    }
        



