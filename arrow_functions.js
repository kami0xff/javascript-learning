//Arrow functions are a shortcut syntax for function expressions
//it looks as follows

//Single line arrow Functions (has an implicit return of the expression)

// let func = (arg1, arg2, ..., argN) => expression;

//creates a function that accepts arg1,arg2, argN as arguments and evaluates the expression on the right side 
//and then returns the result of the expression
let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/

//if we have only one parameter then we can omit the paranthesis
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

//if there are no parameters however the paranthesis must be present but empty 
let sayHi = () => alert("Hello!");

//arrow functions can be used in the same way as function expressions 
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");
welcome();


//MULTI LINE ARROW FUNCTIONS
//the arrow functions we have seen so far are single line ones 
//the big difference with the multiline one is that there is no implicit return
//and they have curly braces
let sum2 = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

