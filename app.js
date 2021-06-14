//Using default parameters:

/*function favMovie(movie = 'The Room', name = 'Tommy Wiseau') {
    console.log(`My name is ${name} and my favorite movie is ${movie}!`);
};
favMovie('Shrek', 'Ellie');*/


//Using Arrow Function:

/*let favMovie = (movie = 'The Room', name = 'Tommy Wiseau') => {
    console.log(`My name is ${name} and my favorite movie is ${movie}!`);
};
favMovie('Shrek', 'Ellie');*/


//Use Concise Body shorthand so that console.log statement is on the same line as the arrow:

let favMovie = (movie, name) => console.log(`My name is ${name} and my favorite movie is ${movie}!`);
favMovie('Shrek', 'Ellie');


//Create a new arrow function called getFirstName:
//Function should take one parameter for full name and return the first name:


let getFirstName = fullName => {
    console.log(fullName.split(" ")[0]);
};
getFirstName('Ellie Banks');

//Create a new arrow function called getFirstNameConcise using concise body syntax:
let getFirstNameConcise = fullName => console.log(fullName.split(" ")[0]);

getFirstNameConcise('Ellie Banks');

//Create a new function named doMath that will take in two parameters and return an object literal. 
//It should have two properties, the exponent result (x^y) and the product of the two numbers.

let doMath = (x,y) => {        
    return {
        result: Math.pow(x,y),
        product: x * y
    }
}

let thisMath = doMath(5,2);
console.log(`The result of 5 to the power of 2 is ${thisMath.result}. The product of 5 and 2 is ${thisMath.product}`);

//Write a function that takes 3 parameters. Using the spread operator, insert the values of an array
function newFunc(name, location, favFood) {
    console.log(`My name is ${name}. I live in ${location}. My favorite food is ${favFood}`);
}

let enteredValues = ['Ellie', 'Birmingham', 'Oreos'];
newFunc(...enteredValues);

let myName = 'Ellie';

function sayHello(word) {
    let spread = [...word];
    for (i = 0; i < word.length; i++)
    console.log(spread[i]);
} 
sayHello('hello');

function sayHi(txt) {
    let nameSpread =[...txt];
    for (i=0; i < txt.length; i++)
    console.log(nameSpread[i]);
}
sayHi(myName);