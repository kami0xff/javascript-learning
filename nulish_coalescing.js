//?? is the nullish coalescing operator 
//As it treats null and undefined similarly, we’ll use a special term here,
//in this article. For brevity, we’ll say that a value is “defined” when 
//it’s neither null nor undefined.

// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.

//so the ?? operator returns the first operand if it is not null/undefined otherwise it will return
//the second operand

//we could rewrite this operator using the ? conditional operato we already know
//TODO !== operator not described in comparisons.js
let result = (a !== null && a !== undefined) ? a : b;

//this ?? operator where we need to provide a default value 

//we can also use the ?? operator to select the first value from a list that is not null/undefined
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); 

//This may seem simillar to what we saw with the OR || Operator 
//but there is a difference 
//|| returns the first truthy value.
//?? returns the first defined value.
//|| does not distinguish between null undefined "" NaN 0 false
//

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

//the precedence of ?? is the same as ||

//Javascript does not allow to use ?? alongside && and || unless you use explicit paranthesis 
//let y = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works
