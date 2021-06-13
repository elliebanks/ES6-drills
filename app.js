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

let fullName = 'Ellie Banks';
let firstName = fullName.split(' '); 

let getFirstName = fullName => {
    console.log(firstName[0]);
};
getFirstName();

//Create a new arrow function called getFirstNameConcise using concise body syntax:
let getFirstNameConcise = fullName => console.log(firstName[0]);

getFirstNameConcise();

//Create a new function named doMath that will take in two parameters and return an object literal. 
//It should have two properties, the exponent result (x^y) and the product of the two numbers.

let doMath = (x,y) => {
    let exponentResult = Math.pow(x,y);
    let productResult = x * y;
    console.log(`exponent: ${exponentResult} product: ${productResult}`);

    return {
        exponent: exponentResult,
        product: productResult
    };
}

let results = doMath(5,2);
console.log(results);

//I don't know if I did this right. The only way that I was able to have the template literals work was if it was console.log'd into the function. 

//Write a function that takes 3 parameters. Using the spread operator, insert the values of an array
function newFunc(name, location, favFood) {
    console.log(`${name} ${location} ${favFood}`);
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