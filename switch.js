
// A switch statement can replace multiple if checks.
// It gives a more descriptive way to compare a value with multiple variants.
switch(x) {
    case 'value1':  // if (x === 'value1')
    //   ...
    //   [break]
  
    case 'value2':  // if (x === 'value2')
    //   ...
    //   [break]
  
    default:
    //   ...
    //   [break]
  }



//both the switch and case allow for arbitrary expressions 
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

//and we can group cases 
let a2 = 3;

switch (a2) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}



//TYPE MATTERS IN SWITCH CASES
//the equality check for the cases is always STRICT the values must be of the same type to match 

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
//case 3 will never execute in this case 
