"use strict";

// Testing Webpage
// console.log('Hello World!')

// 1. Variables
// var dayOfWeek = 'Monday';
// console.log(dayOfWeek)

// var dayOfWeek = 'Friday';
// console.log("I can't wait for Friday!")

// // 2. User Input
// let animalInput = (prompt("What is your favorite animal?"));
// let colorInput = (prompt("What is your favorite color?"));
// console.log(`I've never seen a ${colorInput} ${animalInput} before!`)

// 3. Conditionals
// Meals
// Favorite Breakfast: Bacon, Egg, and Cheese sandwich with Ketchup!
// Favorite Lunch: Chick-Fil-A Spicy sandwich with medium fries
// Favorite Dinner: White rice, red beans, and stew chicken

// let timeOfDay = 1300;
// let timeToEatBreakfast = 'Breakfast: Bacon, Egg, and Cheese sandwich with Ketchup!'
// let timeToEatLucnch = 'Lunch: Chick-Fil-A Spicy sandwich with medium fries'
// let timeToEatDinner = 'Dinner: White rice, red beans, and stew chicken'

// if (timeOfDay < 1200){
//     console.log(timeToEatBreakfast);
// }else if(timeOfDay >= 1200){
//     console.log(timeToEatLucnch);
// }else
// {
//     console.log(timeToEatDinner);
// }

// Random Number
// var randomNumber = Math.floor(Math.random() * 10 + 1); 
//     if (randomNumber <= 2){
//         console.log('Beatles')
//     }else if (randomNumber = 3){
//         console.log('Stones')
//     }else if (randomNumber = 4){
//         console.log("Stones")
//     }else if (randomNumber = 5){
//         console.log('Stones')
//     }else if (randomNumber = 6){
//         console.log('Floyd')
//     }else if (randomNumber = 7){
//         console.log('Floyd')
//     }else if (randomNumber = 8){
//         console.log('Floyd')
//     }else {
//         console.log('Hendrix')
//     }

// 4.Loops
// For Loops #1
// const n = 7
// for(let i = 1; i <= n; i++){
//     console.log("JavaScript is Cool!");
// }

// For Loops #2
// for(let i = 0; i < 11; i++){
//     console.log(i)
// }

// For Loops #3
// let helloAndGoodbye = ['hello', 'goodbye', 'hello', 'goodbye', 'hello', 'goodbye', 'hello', 'goodbye', 'hello', 'goodbye']
// for(let i = 0; i<helloAndGoodbye.length; i++){
//     console.log(helloAndGoodbye[i])
// } 


// While Loops #1
//  let favoriteMovie = 'The Sandlot'
//     console.log(favoriteMovie)

// Functions 
// Example on why it won't work
// var favoriteMovie = "The Sandlot"
// function printMovieName(favoriteMovie){
//     let results;
//     results = printMovieName;
//     return results
// }
// Favorite Band Function
// function favoriteBand(){
//     let result; 
//     result = 'Fall Out Boy';
//     return result;
// }
// let myResult = favoriteBand();
// console.log(`${myResult} is my favorite band too!`)

// Concert(parameters) Function **************
// function concertDisplay(musicalAct){
//     let myStreet = (prompt("Please Enter Your Street Address!")); 
//     musicalAct = `It would be great is Joey Bada$$ played a show on ${myStreet}`;
//     return musicalAct;
// } 
// console.log(concertDisplay)

// Arrays #1 Desktop Items
// const desktopItems = ["Desk", "Monitor", "Keyboard"];
// console.log(desktopItems[1]);
// // Adding a new item to the Array
// desktopItems.push("Infinity Gauntlet");
// console.log(desktopItems);
// // Array Loop
// var myDesktopItems = desktopItems.length;
// for (var i = 0; i < myDesktopItems; i++){
//     console.log(desktopItems[i])
// }

// Magic Number
let magicNumber = 50;
let guess = 0;
let userInput = (prompt("Guess the Magic Number!"));
const x = magicNumber;


while(userInput){
    if (userInput < magicNumber){
        console.log('Too Low!')
        console.log(userInput)
    }else if(userInput > magicNumber){
        console.log('Too High!')
        console.log(userInput)
    }else if(userInput === 40){
        console.log('Getting Warmer!')
        console.log(userInput)
    }else if(userInput === 60){
        console.log('Getting Warmer!')
        console.log(userInput)
    }else if(userInput === magicNumber){
        console.log(`Congratulations! You Guessed Correctly! The Magic Number was ${magicNumber}!`)
    }else{
        console.log('Try Again!')
        console.log(userInput)
    }
}

