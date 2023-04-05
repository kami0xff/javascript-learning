//< > <= >= == === !=
//all comparison operators return a boolean value true or false in Javascript
let res = 5 > 4;

//String comparisons (when comparing two strings)
//to compare Strings javascript uses the lexicographic order / dictionary order 
//strings are compared letter by letter
let res2 = "Glow" > "Glee"; //Glee in dictionary order comes before Glow so glow is greater than Glee

//The algorithm goes as follow
//Compare the First character of both strings 
    //if the first character is greater or less than the other string's then the first string is greater 
    //or less than the other string 
    //(a is less than z / z > a)

//if the first character is the same move to the next character and compare as in the previous step
    //repeat

//if the two strings are the same length and all characters are the same then the two strings are equal 

//if the two strings are not the same size the longer string is considered greater than the smaller 


//unlike in a real dictionary A capital letter "A" is not equal to the lowercase "a". 
//Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index 
//in the internal encoding table JavaScript uses (Unicode)


//COMPARISON OF DIFFERENT TYPES
//when comparing values of different types javascript converts them to numbers
//if we compare a string to a number 

let res3 = "test" > 6;  //we get false here "test gets converted to NaN"
//and NaN gets converted to false 

let res4 = "012" > 6; //this will be true "012" gets converted to 12


let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true ! here "0" gets converted to 0 and 0 == 0 returns true


//STRICT EQUALITY
//A regular equality check == has a problem, it cannot differentiate 0 from false 
alert(0 == false); //true
alert("0" == false); // true false gets converted to 0 and "0" also gets converted to 0
alert("" == false); //also true because "" also gets converted to 0

//this is why we have the strict equality operator === which checks equality without type convertion
//of the operands a === b if a and b are values of different type it immediately returns false 
alert(0 === false ); //false
alert(false === false); //true
alert(0 === 0);

alert(null == false) //false as we saw this is the exception null does not get converted to number in ==
//equality operator
alert(undefined == false) //false§


//COMPARISON WITH NULL AND UNDEFINED 
alert( null === undefined ); //false
alert( null == undefined ); // true
//we can see that null equals undefined with the non strict equality operator 

//for math and other comparison operators < > >= <= 
//null and undefined are converted to numbers 
//undefined -> NaN
//null -> 0

//these rules can lead to strange results
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

//this is because == and === equality checks behave differently than the other comparison operators < > <= >=
//comparison operators convert null to a number which then treats it as 0

//EXCEPTION !
//On the other hand equality checks for null and undefined == is defined such that 
//without any conversions they equal each other and don't equal anything else 
//this is why 
alert(null == 0) // is FALSE !
alert(null != 0) // is True (i assume that the exception for == with null and undefined is also true for !=)


alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN 
// is a special numeric value which returns false for all comparisons.

// The equality check (3) returns false because undefined only equals null, undefined, 
// and no other value.


//how to avoid problems 
//be carefull of undefined / null comparisons 
//Don’t use comparisons >= > < <= for values that can be null/undefined unless sure



