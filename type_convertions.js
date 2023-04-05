//most of the time operators or functions convert the values given to them to the right type 
//

//String conversion
let string_val = String(123); //becomes "123"
let val = String(true); //becomes the string "true"
let val2 = String(null); //becomes the string "null"
let val3 = String(undefined); //becomes the string "undefined"


//Numeric conversion
//Converting strings to the numeric values if possible 
//this is done automatically by javascript in mathematical functions and expressions 
let string_converted = +"1342590";
let string_converted2 = Number("111")
//Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.
//If the string is not a valid number, the result of such a conversion is NaN. For instance:

//The numeric conversion rules 
//undefined -> NaN
//null -> 0
//true -> 1
//false -> 0

//string -> white spaces from the start and end including tabs \t and newlines \n etc are removed 
//if the remaining string is "" -> 0
//else the number is read from the string
//if error reading the numeric string then the result is NaN


//Boolean Conversion
//the simplest one
//values that are intuitively empty 
//undefined, null, "", 0, NaN -> false

//all the other values are converted to true
//note that "0" and "   " is converted to true

