
//declare functions
//parameters go in between the braces
function showMessage() {
    alert("Hello from function");
}


//function call
showMessage();

//LOCAL VARIABLE
//this is a variable that is declared inside a function
//and therefore only visible inside that function's scope
function localvar() {
    let message = "Hello, I'm JavaScript!"; // local variable
    alert( message );
}
alert(message); //this does not work


//OUTER VARIABLES
//In C C++ Rust Functions can have access to global outer variables 

//In JS also functions have access to variables in their outer scope / scope in which the function
//was declared in or global scope

let userName = 'John';
function useOuter() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
useOuter();
alert( userName ); // Bob, the value was modified by the function

//so everything in outer scope of a function is in / out can be read and modified 
//Variables declared outside of any function, such as the outer userName in the code above, are called global.

//Most of the time globals are for project level data


//PARAMETERS
//when the functions is called and the values are passed in they are copied to the local 
//variables from and text. 
//this means that if we modify from and text there will be no side effects to variables outside the function
//(this is true except for reference types such as objects and arrays)
function showMessageParam(from, text) {
    from = '*' + from + '*'; // make "from" look nicer
    alert( from + ': ' + text );
  }
  
  let from = "Ann";

  showMessage(from, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  alert( from ); // Ann


//A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
//An argument is the value that is passed to the function when it is called (it’s a call time term).
  

//DEFAULT VALUES
//i did not know that it is possible to call a function without providing all the arguments in javascript
//the value of the parameter will be set to undefined we could call showMessage(from,text)
//with just showMessage("Aix") and in the function we will have from === "Aix" and text === undefined
//in the case this is not acceptable and we need some default value we can give one like so 
//note that if the argument is provided but is undefined like so
//showMessage("Aix",undefined) then the default value is also used s
function showMessageDefault(from, text = "no text given") {
    alert( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given

//in the above example the default is a simple string but it could be a much more complex expression
function showMessageComplexDefault(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
}
function anotherFunction() {
    return "no text given";
}
//In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
//In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.
//however if the parameter is not provided it is independently called 


//in the past this syntax for default parameters was not supported 
//so we had either the explicit check for undefined
function showMessageExplicitCheck(from, text) {
    if (text === undefined) {
      text = 'no text given';
    }
  
    alert( from + ": " + text );
}
//or the OR operator ||
function showMessageORCheck(from, text) {
    // If the value of text is falsy, assign the default value
    // this assumes that text == "" is the same as no text at all
    text = text || 'no text given';
}

//the null coalescing operator can also be used to check for null and undefined
//whilst letting 0 and "" be ok 
function showCountNullCoalescing(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
}


//RETURNING A VALUE 
//A function can return a value back to the calling code as a result
//
function sum(a, b) {
    return a + b;
}
  
let result = sum(1, 2);
alert( result ); // 3
//the return can be in any place of the function When the execution flow reaches it 
//the function stops and the value is returned to the calling code 
//so there may be many occurences of return in a function
function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
}
//it is also possible to return without a value which causes the function to exit immediately


//A function with an empty return or without it returns undefined
function doNothing() { /* empty */ }
alert( doNothing() === undefined ); // true

//An empty return is also the same as return undefined:
function doNothing2() {
  return;
}
alert( doNothing() === undefined ); // true


//NEVER ADD NEW LINE BETWEEN RETURN AND THE VALUE JS ASSUMES SEMI COLON AFTER RETURN OTHERWISE
//we need parantheses if we want to do that return (
//                                                   data
//                                                 );


//FUNCTION EXPRESSIONS FUNCTIONS AS VALUES
//in javascript a functions is not a language structure but a special kind of value
//function declaration 
function sayHi() {
  alert( "Hello" );
}
//there is another syntax called function expression 
let sayHiExpression = function() { //no name after the function keyword
  alert( "Hello" );
};
//that allows us to create a new function in the middle of an expression 
//the function may be created and called immediately or scheduled for a later execution

//but no matter if a function is declared or created in an expression in both cases functions are values 
//eg
console.log(sayHi);//does not run the function because no call operator ()
console.log(sayHiExpression) //will output a string representation of the function 

//in javascript functions are values so we can treat them as values 
//they are special values because we can call them with the call operator () but they are still values 

function sayHi() {   // (1) create
  alert( "Hello" );
}
let func = sayHi;    // (2) copy
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

//CALLBACK FUNCTIONS
//we have a question function in which depending on the user's response we will execute the yes() or the no()
//functions which are provided as parameters

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
//The arguments showOk and showCancel of ask are called callback functions or just callbacks.
//the idea is that we pass a function and expect it to be "called back later"

//we can use the function expression syntax to make it shorter
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
//in this way the functions are created when ask's local variables are initialized 
//they are anonymous however and unlike in the example before cannot be used outside of ask 
//this may or may not be what we want 


//A function is a value representing an “action”
// Regular values like strings or numbers represent the data.
// A function can be perceived as an action.
// We can pass it between variables and run when we want.

//there is also a subtle difference between function declaration and function expressions in terms of the javascript engine
//namely that A Function Expression is created when the execution reaches it and is usable only from that moment.
//but a Function Declaration can be called earlier than it is defined. This is just because of the inside workings
//of the javascript engine that will look first for all the global functions and creates them as an initialization step 
//and after execute the code

//There is another subtelty between the two namely that Declared functions only exist within their block scope
let age = 16; // take 16 as an example
if (age < 18) {
  welcome();               // \   (runs)
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
  welcome();               // /   (runs)
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.
welcome(); // Error: welcome is not defined

//to solve this issue if we want to conditionally create a function and still be able to use it 
//we can use function expressions

let welcome;
if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };
}
welcome(); //this is ok will work 

//remember we can do conditional assignments much more cleanly with the ? operator this is also true for functions
let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now