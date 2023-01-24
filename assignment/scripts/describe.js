// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Variable called 'name' is declared with the type string and a value of 'Dane'.
// We then check if the variable 'name' is equal to the string 'Mary'.
// If it is, we log 'Hi, Mary!' to the console.
// If not, we log 'How do you do?' to the console. 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Variable named 'secret' is declared without a value.
// Variable named 'code' is declared with the value of 123 and type number.
// We check if the variable 'code' is equal to the number 123.
// If it is, we give the variable 'secret' the value of 'super' and we also give the variable 'code' the value of 'code * 2', or 246.
// We then check if the variable 'code' is greater than 250, and if it is we give the variable 'secret' the value of 'duper'.
// We then log the value of the variable 'secret' to the console, which would be 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Variable named 'isStudent' is declared with value of true and type boolean.
// Variable named 'age' is declared with value of 24 and type number.
// Variable named zip is declared with value of 55407 and type number.
// We then check if the variable 'isStudent' has the value 'true' and if the variable 'zip' is greater than 80000, if it is we log 'You're a student on the west coast!' to the console.
// If not, we check if the variable 'isStudent' is 'false' or if the variable 'age' is less than 30, if either are true we log 'What are your hobbies?' to the console.
// If not, we check if the variable 'isStudent' is 'true', if it is we log 'Welcome to prime!' to the console. 
// If not, we log 'how about the weather?' to the console. 
// This conditional would output 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - According to description, colorOne should be have value 'blue' and colorTwo should have value 'red'
// swap values for these two variables.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX - Only colorOne is given the value 'purple', not both variables.
  // Add colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - the 'or' operator is used (||), not the 'and' operator (&&).
// Switch these operators so the line reads if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/ 

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - for clarity and to follow instructions I would change the line below to if(age >= minAge), even though it achieves the same thing. 
if(minAge <= age) {
  //FIX - the line below should be console.log('enter');
  console.log('no entry');
} else {
  //FIX - the line below should be console.log('no entry');
  console.log('enter');
}
*/

