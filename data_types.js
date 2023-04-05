//a value in javascript is always of a certain type 

//Number
let num = 23;
let num2 = 12.2;
//bigInt
const bigInt = 1234567890123456789012345678901234567890n;//add the n suffix

//String
//3 types "Hello" 'Hello' `Hello`
//the first two are identical but the last one has more functionality we can 
//include javascript expressions inside with ${...}
let str = `Hello ${num}`;
//also there is no character type in javascript

//Boolean
//only two values true and false 
//they are the result of comparison operators 
//

//NULL
//the null value is a type of its own it is something that is set at some point 
//because uninitialisation is represented by undefined 
//it means empty or value unknown
let age = null;

//UNDEFINED
//unefined is also a type of its own just like null 
let unde = undefined; //we can set it ourselves but we should never do this 
//the meaning of undefined is value not assigned and if we start assigning undefined then it makes no sense 
//because of a variable that is declared but not initialized to a value already is undefined by default 
let imundefined; // -> undefined


//OBJECTS AND SYMBOLS
//all other types in javascript are called primitives (because their values can contain only a single thing)
//on the contrary objects are used to store collection of data and more complex entities, they are special 

//symbol types is used to create unique identifier for objects 

//a great operator to find the type of any expression/value is the typeoff operator 
typeof {name: "joshua", age : 25}; //object
typeof true; //boolean


typeof Math; //object (built in object that gives us access to math operations)

typeof null //object (interesting) //That’s an officially recognized error in typeof, 
//coming from very early days of JavaScript and kept for compatibility. 
//Definitely, null is not an object. It is a special value with a separate type of its own.
//The behavior of typeof is wrong here

typeof alert //function (because alert is a function however javascript does not have a special function type in fact 
//functions belong to the object type but typeof treats them differently returning function) This also comes from the early days
//of javascript and is technically incorrect. 


//the 8 types of javascript

//number 
//bigInt
//string
//boolean
//null 
//undefined
//symbol 
//object



