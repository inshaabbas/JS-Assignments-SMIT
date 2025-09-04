// Q1. Write a function that displays current date & time in your browser.

// function currentDate(){
//     var date = new Date();
//     document.writeln(`${date}`)
// }
// currentDate();

// Q2. Write a function that takes first & last name and then it greets the user using his full name.

// function userName(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + " " + lastName;
//     alert(`Welcome ${fullName} to our website`);
// }
// userName();

// Q3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum() {
//     var Num1 = +prompt("Enter First number for addition");
//     var Num2 = +prompt("Enter Second number for addition");
//     var addition = Num1 + Num2;
//     alert(`Addtion of ${Num1} and ${Num2} is ${addition}`);
// }
// sum();

// Q4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator(num1, operator, num2) {
//     var result;
//     num1 = +num1;
//     num2 = +num2;

//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "/") {
//         if (num2 === 0) {
//             result = "Cannot divide by zero"
//         } else{
//             result = num1 / num2 ;
//         }
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else {
//         result = "Invalid operator";
//     }
//     document.writeln(`${num1} ${operator} ${num2} = ${result}`);
// }

// calculator("2", "/", "0");

// Q5. Write a function that squares its argument.

// function square(num1){ 
//     num1 = +num1;
//     var result = num1 ** 2;
//     document.writeln(`Square of ${num1} is ${result}`);
// }
// square("8");

// Q6. Write a function that computes factorial of a number.

// function factorial(num) {
//     num = +num;

//     if(num < 0){
//         document.writeln("Factorial is not defined for negative numbers.");
//         return;
//     }

//     var result = 1;
//     for(i=1; i <= num; i++){
//         result *= i;
//     }
//     document.writeln(`Factorial of ${num} is ${result} <br>`);
// }

// factorial(8);

// Q7. Write a function that take start and end number as inputs & display counting in your browser.

// function numbers(){
//     var startNum = +prompt("Enter Start Number");
//     var lastNum = +prompt("Enter last Number");

//     for(var i= startNum; i <= lastNum; i++){
//         document.writeln(`Counting: ${i} <br>`);
//     }
// }
// numbers();

// Q8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(){
//     var base = +prompt("Enter base");
//     var perpendicular = +prompt("Enter perpendicular");
//     function calculateSquare(){
//         var baseSquare = base * base;
//         var perpendicularSquare = perpendicular * perpendicular;
//         return baseSquare + perpendicularSquare;
//     }
//     var hypotenuseSquare = calculateSquare();
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
//     hypotenuse = Math.round(hypotenuse);
//     document.writeln(`Hypotenuse = ${hypotenuse}`);
// }
// calculateHypotenuse();

// Q9. Write a function that calculates the area of a rectangle.
//  A = width * height
//   Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// i. Arguments as value
// function findArea(width, height) {
//     var area = width * height;
//     document.writeln(`Area of a rectangle is ${area} <br>`);
// }
// findArea(5, 5);

// // ii. Arguments as variables
// function findAreaWithVar(width, height) {
//     var width = 5;
//     var height = 10;
//     var area = width * height;
//     document.writeln(`Area of a rectangle is ${area}`);
// }
// findAreaWithVar();

// Q10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function palindrome(str){
//     var reversedStr = str.split('').reverse().join('');
//     if(str === reversedStr){
//         document.writeln(`${str} is a palindrome <br>`);
//     }else{
//         document.writeln(`${str} is not a palindrome`);
//     }
// }
// palindrome("madam");
// palindrome("Syllabus");

// Q11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function firstLetterCap(str){
//     var words = str.split(" ");
//     for(var i=0; i < words.length; i++){
//         var word = words[i];
//         if(word.length > 0){
//             words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//         }
//     }
//     return words.join(" ");
// }
// document.writeln(firstLetterCap("the quick brown fox"));

// Q12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongestWord(str) {
//     var words = str.split(" ");
//     var longestWord = "";
//     for(var i=0; i < words.length; i++){
//         if(words[i].length > longestWord.length){
//             longestWord = words[i];
//         }
//     }
//     return "The longest word is: " + longestWord;
// }
// document.writeln(findLongestWord("Web Development Tutorial"));

// Q13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function occurrencesOfLetter(str, letter){
//     var count = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str.charAt(i) === letter){
//             count++;
//         }
//     }
//     document.writeln(`The letter ${letter} appears ${count} times in ${str}`);
// }
// occurrencesOfLetter("JSResourceS.com" , "o");

// Q14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(radius) {
//     var π = 3.14;
//     var circumference = 2 * π * radius
//     document.writeln(`The circumference is ${Math.round(circumference)} <br>`);
// }
// calcCircumference(20);

// function calcArea(radius) {
//     var π = 3.14;
//     var area = π * radius * radius;
//     document.writeln(`The area is ${Math.round(area)}`);
// }
// calcArea(20);