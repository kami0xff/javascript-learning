let concat = "joshua" + " caumont"; //+ is the concatenation operator
//not that if we try to concatenate a string with anything else than a string it will try to convert it to a string 
//following the rules that we have seen 
let concat1 = "joshua" + 123; //will be joshua123
let concat2 = "joshua" + true; //will be joshuatrue
let concat3 = "joshua" + {} //will be joshua[object Object]

//+ is the only operator that works with strings in such a way all the other operators 
//- / * % ** will convert the operands to numbers instead 
let res = "6" - "3"; //will be a value of number type equal to

//the unary + operator is sometimes use to convert values into a Number type 
//because the unary + does nothing the value
let res2 = +null; //will be 0
let res3 = +"123"; //will be 123

//OPERATOR PRECEDENCE
//if an expression has more than one operator the order of operations is determined by the operator 
//precedence the one with the largest precedence number executes first 

//Assignment
//the assignment = is actually also an operator it has very low precedence 
//The assignment operator in javascript actually returns the value

//x = value is write value into x and return value 

let a = 1;
let b = 2;
let c = 3 - (a = b + 1); //this can let us write strange expressions like this 
//which are not very clear 

//and it also allows for chaining of assignments which i also personnally don't really like 
a = b = c = 2 + 2; //here they are all set to 4 

a = b += 2; //(i guess += in place assignment works the same as =)



//Increment operator 
//they again made a mess with this operator imo 
//every operator in javascript returns a value 
//in the case of increment ++ and decrement -- it depends if they are prefix or postfix

// ++value will return the new value 
// value ++ will return the old value before the increment

let counter = 1;
alert( 2 * ++counter ); // 4

let counter2 = 1;
alert( 2 * counter++ ); //will result in 2 because counter++ returns 1


//Binary Bitwise operators
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )



//COMMA OPERATOR
//one of the rarest and most unusual operators 
//it allows us to evaluate several expressions dividing them with a comma   
//each of them is evaluated but only the result of the last one is returned 
//eg
let comma = (1 + 2, 3 + 4);
alert( comma ); // 7 (the result of 3 + 4)
//1+2 is evaluated the result is thrown away then 3+4 is evaluated and the result is returned 

//why would we need this ?
//well some people use it in frameworks etc to put multiple actions in one line 
//example
for (a = 1, b = 3, c = a * b; a < 10; a++) {
}
//but usually this does not improve code readability so we should think before using it.
