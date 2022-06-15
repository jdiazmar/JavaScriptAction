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