// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the numbe

// var num = 3.45214 ;
// document.writeln(`Number: ${num} <br>`);
// document.writeln(`Round off : ${Math.round(num)} <br>`);
// document.writeln(`Number: ${Math.floor(num)} <br>`);
// document.writeln(`Number: ${Math.ceil(num)}`);

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = -2.63 ;

//  document.writeln(`Number: ${num} <br>`);
// document.writeln(`Round off : ${Math.round(num)} <br>`);
// document.writeln(`Number: ${Math.floor(num)} <br>`);
// document.writeln(`Number: ${Math.ceil(num)}`);

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = -4 ;

// document.writeln(`The Absolute value of ${num} is ${Math.abs(num)}`);

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// document.writeln(`Random Dice Value : ${Math.floor(Math.random() * 4 )} <br>`);
// document.writeln(`Random Dice Value : ${Math.floor(Math.random() * 6 )}`);

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in  your browser

// let coin = Math.floor(Math.random() * 2) + 1;

// document.writeln(`${coin} <br>`);

// if (coin === 1) {
//   document.writeln("random coin value: Tails");
// } else {
//   document.writeln("random coin value: Heads");
// }

// 6. Write a program that shows a random number between 1 and 100 in your browser.

// document.writeln(`Random Number between 1 to 100 : ${Math.floor(Math.random() * 100 + 1)}`);

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt(`What's your weight in kilograms`);

// document.writeln(`The weight of user is ${parseInt(weight)} Kilograms`);

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

// var num = 5 ;
// var user = +prompt("Enter a number between 1 to 10");

// if(user === num){
//     alert(`Congratulations! you found the secret number`);
// }else{
//     alert(`Try Again!`)
// }