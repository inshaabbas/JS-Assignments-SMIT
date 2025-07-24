// Q1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var characterCheck = prompt("Enter a single character");

// if(characterCheck.length === 1){
//     var code = characterCheck.charCodeAt(0);
//     if(code >= 48 && code <= 57){
//         alert("You entered a number.");
//     }else if(code >= 65 && code <= 90){
//         alert("You entered a uppercase letter.");
//     }else if(code >= 97 && code <= 122){
//         alert("You entered a lowercase letter.");
//     }else{
//         alert("You entered a special letter.");
//     }
// }else{
//     alert("Please enter only one character.");
// }

// Q2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// if(num1 > num2){
//     alert(`Larger number is ${num1}`);
// }else if(num2 > num1){
//     alert(`Larger number is ${num2}`);
// }else{
//     alert("Both numbers are equal");
// }

// Q3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var number = +prompt("Enter a number");

// if(number < 0){
//     alert("Negative Number")
// }else if(number > 0){
//     alert("Positive Number")
// }else{
//     alert("Zero")
// }

// Q4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var character = prompt("Enter a single character");

// if(character === "a" || character === "e" || character === "i" || character === "o" ||character === "u" || character === "A" || character === "E" || character === "I" || character === "O" || character === "U"){
//     alert("True")
// }else{
//     alert("False")
// }

// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

// var password = "abc123"
// var user = prompt("Enter your password");

// if(user === "" || user === null){
//     alert("Please enter your password");
// }else if(user === password){
//     alert("Correct! The password you entered matches the original password");
// }else{
//     alert("Incorrect password");
// }

// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }

// alert(greeting);

// Q7. Write a program that takes time as input from user in 24 hours clock format like: 19 = 7pm. Implement the following case using if, else & else if statements

// var askTime = prompt("Enter a time in 24 hours format (0 - 23");

// if (askTime >= 0 && askTime < 12) {
//     alert("Good Morning");
// } else if (askTime >= 12 && askTime < 17) {
//     alert("Good Afternoon");
// } else if (askTime >= 17 && askTime < 21) {
//     alert("Good Evening");
// } else if (askTime >= 21 && askTime <= 23) {
//     alert("Good Night");
// } else {
//     alert("Invalid time. Please enter a value between 0 and 23.");
// }