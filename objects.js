//as we know there are 8 data types in javascript 7 of them can be considered primitive
//primitive because their value contains only a single thing

//number
//boolean
//string
//objects
//ressources
//null
//undefined 
//bigInt

//in contrast objects are used to store keyed collections of various data or more complex entities 
//they are at the core of javascript 

//{
//     property 1 : properties are key value pairs 
//     property 2
// }

//keys must be strings !!
//values can be anything

let user = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

//usually the object literal syntax is used 
//we can add properties like so

let user3 = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

//we can read properties with the dot notation
user3.name = "joshua";

//we can add properties by specifying a key that does not exist  
user3.newkey = true;

//we can delete a property of our object with the delete operator
delete user3.newkey;

//If we want to use multi word property names they must be quoted
let user4 = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};


//there is an alternative way to access an object's properties which also works for multi word properties that contains spaces
//the square brackets []
//the dot notation does not support spaces in property names 
user4["likes birds"] = false;
user4["name"] = "joshua";
//we must properly quote the string in the square brackets with this syntax 

//the square bracket syntax also allow to get the key name from the result of an expression 
//whereas the dot notation does not 

let key = "likes birds";
// same as user["likes birds"] = true;
user4[key] = true;

//Computed properties 
let fruit = "apple";
let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log(bag.fruit)
//we can also use more complex expressions in the square brackets
let bag2 = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

//this stuff is equivalent to 
let fruit2 = "banana";
let bag3 = {};
bag3[fruit2] = 5;


//when we need something simple we use the dot notation and when we want to do something more complex
//we can switch to the square bracket notation if needed 


//PROPERTY VALUE SHORTHAND
let name = "jojo";
let age = 12;

//the use case of making a property from a variable is very common 
//therefore there is a shorthand which will take the variable name as the key and the value of the variable as 
//the value like so 
let short = {
    name, 
    age,
}
//Instead of name:name we can just write name, like this:
//we can use both shorthand and normal in the same object 

let short2 = {
    name,  // same as name:name
    age: 30
  };

//there are no restrictions on keynames for objects you can have object keys called let for return etc 
//but i really don't see how that is usefull
let obj = {
    for: 1,
    let: 2,
    return: 3
};//In short, there are no limitations on property names. 
//They can be any strings or symbols (a special type for identifiers, to be covered later).
//Other types are automatically converted to String for object keys 
//0 would become "0" true "true" etc

//the only exception is the key name _proto_ which is special for javascript objects 


//PROPERTY EXISTENCE TEST 
//how do we know if an object has a certain property at runtime 
//especially considering that with an object we can access any property even if it does not exist in javascript
//reading a non-existing property returns undefined 

let use = {};
alert( user.noSuchProperty === undefined );

//there is also a special operator 
//the in operator is written "key" in object
let user6 = { name: "John", age: 30 };
alert( "age" in user6 ); // true, user.age exists
alert( "blabla" in user6 ); // false, user.blabla doesn't exist
//it returns true if the property exists and false otherwise 

//the in operator takes care of the case where a property exists but stores undefined (in which case it will return true)
//the if test for undefined does not take care of that case
//(this situation should never happen in the first place since we should never assign undefined as a value anywhere)


//FOR IN loop 
//this one i find very usefull it allows you to traverse all the keys of an object 
//its a completely different thing than the normal for(;;)

let user7 = {
    name: "John",
    age: 30,
    isAdmin: true
};
  
for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
}

//how are object properties sorted 
//“ordered in a special fashion”: integer properties are sorted, others appear in creation order. 
//integer properties are properties whose key can be converted to a number 
//in the case of user7 the creation order would be name, age, isAdmin if we later added a key "1"
//then it would be "1", name, age, isAdmin







  
