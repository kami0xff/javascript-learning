if (true) {
    console.log("true");
}
//if statement will evaluate the expression in its paranthesis and THEN convert the result to a BOOLEAN
//0 "" NaN null undefined all become false they are also called the falsy values
//other values become true so they are called truthy




let res = 5 > 4 ? "gt" : "lt"; //the conditional operator actual returns the value in this case "gt"
console.log(res);

//Conditional operator ?
//sometimes we need to assign a variable depending on a condition 

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

//the conditional operator ? lets us do that in a shorter and more concise way 
//it is also called the ternary operator because it has 3 operands and it is the only one in 
//Javascript that has that many

// let result = condition ? result_true : result_false;
//the condition is evaluated if it is true then value1 is returned otherwise value2 is returned 

//the above example could be simplified into this single line
let accessAllowed2 = (age > 18) ? true : false;
//technically in the example above you could even make it shorter because the comparison itself returns
//true/false (remember all comparison operators return true/false)

let accessAllowed3 = age > 18;

//we can also chain the question mark operators in case there are multiple conditions
//just like a series of elseif
let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

//in elseif it would look like so 
if (age < 3) {
    message = 'Hi, baby!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Greetings!';
} else {
    message = 'What an unusual age!';
}

//Non-traditional use of ‘?’
//Sometimes the question mark ? is used as a replacement for if and instead of assigning values to variables
//we will execute different code depending on a condition 

let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

//although it is not really recommended to do this 
//it makes the code less readable 

if (company == 'Netscape') {
    alert('Right!');
  } else {
    alert('Wrong.');
  }

//The purpose of the question mark operator ? is to return one value or another depending
// on its condition. Please use it for exactly that. and use if for different branches of code
