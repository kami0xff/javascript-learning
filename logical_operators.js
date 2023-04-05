// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)


//OR OPERATOR
let result = a || b;
//Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

if (hour < 10 || hour > 18) {
    alert( 'The office is closed.' );
}

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

let result2 = value1 || value2 || value3;
// The OR || operator does the following:

// Evaluates operands from left to right.

// For each operand, converts it to boolean. If the result is true, stops and returns 
//the original value of that operand.

// If all operands have been evaluated (i.e. all were false), returns the last operand.

//In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found
//remember falsy values are : 0 "" NaN undefined null

//1) This can be used in interesting ways like getting the first truthy value in a list of expressions or variables 
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous");

//2) Can be used to Short Circuit evaluation 
//It means that || processes its arguments until the first truthy value is reached,
//and then the value is returned immediately, without even touching the other argument.

//The importance of this feature becomes obvious if an operand isn’t just a value, 
//but an expression with a side effect, such as a variable assignment or a function call.
true || alert("not printed");
false || alert("printed");


//AND OPERATOR
let result3 = a && b;

//used in an if to make sure that all the conditions are true

//like the OR operator AND can be used in an interesting way namely finding the first falsy value

// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns 
//the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.

//they are both similar but AND returns the first falsy value and OR the first truthy value


//PRECEDENCE OF && is higher than ||

// Don’t replace if with || or && !!!!!!
// you may have the idea of writing
let x = 1;
(x > 0) && alert( 'Greater than zero!' );
//but generally if is more clear since we expect a condition after an if 




//!NOT OPERATOR
let result5 = !true; //-> false
//operator returns the inverse boolean value of its operand
//!0 -> is true 
//!"" -> true
//!NaN -> true
//!null -> true
//!undefined -> true

//it is possible to write a double negation !!
//which is sometimes used to convert a value to a Boolean

// That is, the first NOT converts the value to boolean and returns the inverse, 
// and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

//Precedence of ! Not is the highest of all logic operators 