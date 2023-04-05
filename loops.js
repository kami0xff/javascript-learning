// while(condition)
// the condition is evaluated and converted to a boolean by while.
// For instance, a shorter way to write while (i != 0) is while (i):
// while the condition is truthy the body is executed 



//
for (begin; condition; step) {
    // ... loop body ...
}
//for loops have 4 parts 
//begin part which executes once when entering the loop 
//the condition that is checked each iteration 
//the body is code that is executed as long as the condition is truthy 
//and the step part is executed after the body at the end of each iteration 

//its possible to skip parts of the for loop if you don't need a begin part
for (; i < 3; i++) { // no need for "begin"
    alert( i ); // 0, 1, 2
}

//here we remove the step as well
let i = 0;
for (; i < 3;) {
  alert( i++ );
}

//remove everything
for (;;) {
    // repeats without limits
  }


//in the normal flow the loop will end when the condition becomes falsy but we can break out of a loop 
//manually as well using the break keyword

while (true) {

    let value = +prompt("Enter a number", '');
    
    //
    if (!value) break; // (*)
  
    sum += value;
  
  }
  alert( 'Sum: ' + sum );

  //The combination “infinite loop + break as needed” is great for situations 
  //when a loop’s condition must be checked not in the beginning or end of the loop,
  //but in the middle or even in several places of its body.

  //there is also the continue keyword which skips to the next iteration of the loop 
  //break and continue do not work in the ? conditional operator
  //(i > 5) ? alert(i) : continue; // continue isn't allowed here


  //If we are ever in the case where we need to break out of a nested loop all the way out and not into the parent loop 
  //then we can use loop labels 
  //for example here with the loop labeled outer
  outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');


//A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

label: {
  // ...
  break label; // works
  // ...
}
//…Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples above.

//it is possible to also use continue with a label in which case the labeled loop will skip to the next iteration
// A continue is only possible from inside a loop.