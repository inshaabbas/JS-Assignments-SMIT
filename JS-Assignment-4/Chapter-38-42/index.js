// Q1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function power(base,exponent){
//     var result = base ** exponent
//     document.writeln(`The value of ${base} raised to the power of ${exponent} is ${result}`)
// }
// power(2, 3);

// Q2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function findLeapYear(){
//     var year = +prompt("Enter a year to find whether it is leap year or not");
//     if( ( year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0){
//         alert("It is leap year");
//     }else{
//         alert("It is not a leap year");
//     }
// }
// findLeapYear();

// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions 

// function calculateS(a,b,c){
//     var S = (a + b + c) / 2;
//     return S;
// }

// function calculateArea(a,b,c){
//     var S = calculateS(a, b, c);
//     var area =  Math.sqrt(S * (S-a) * (S-b) * (S-c));
//     document.writeln(`The area of triangle is ${Math.round(area)}`);
// }
// calculateArea(6,6,6);

// Q4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

// function calculateAverage(sub1,sub2,sub3) {
//     var average = (sub1 + sub2 + sub3) / 3;
//     return average;
// }

// function calculatePercentage(sub1,sub2,sub3){
//     var totalNum = 300;
//     var obtainNum = sub1 + sub2 + sub3;
//     var percentage = obtainNum / totalNum * 100;
//     return percentage;
// }

// function mainFunction() {
//     var sub1 = +prompt("Enter Marks of Subject 1:");
//     var sub2 = +prompt("Enter Marks of Subject 2:");
//     var sub3 = +prompt("Enter Marks of Subject 3:");

//     var average = calculateAverage(sub1, sub2, sub3);
//     var percentage = calculatePercentage(sub1, sub2, sub3);
//     document.writeln(`The average of marks is ${average} <br> The percentage of all marks is ${percentage}%`);
// }
// mainFunction();

// Q5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// function customIndexOf(str , char) {
//     for(var i=0; i < str.length; i++){
//         if(str.charAt(i) === char){
//             return i;
//         }
//     }
//     return -1;
// }
// document.writeln("The index of 'h' in 'hello' is " + customIndexOf("hello", "h"));

// Q6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// function removeVowels(sentence) {
//   var vowels = "aeiouAEIOU";
//   var result = "";

//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i];
//     if (vowels.indexOf(char) === -1) {
//       result += char;
//     }
//   }

//   document.writeln(`Sentene without vowels : ${result}`);
// }
// removeVowels("This is Javascript");

// Q7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function countVowelPairs(sentence) {
//   var count = 0;
//   var vowels = "aeiouAEIOU";

//   for (var i = 0; i < sentence.length - 1; i++) {
//     var char1 = sentence[i];
//     var char2 = sentence[i + 1];

//     switch (char1) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//       case 'A':
//       case 'E':
//       case 'I':
//       case 'O':
//       case 'U':
//         if (vowels.indexOf(char2) !== -1) {
//           count++;
//         }
//         break;
//       default:
//     }
//   }

//   document.writeln(`${count}`);
// }

// countVowelPairs("Please read this application and give me gratuity");

// Q8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

// var km = +prompt("Enter distance in kilometers:");

// function convertToMeters(kilometers) {
//   var meters = kilometers * 1000;
//   document.writeln("Distance in meters: " + meters + "<br>");
// }

// function convertToFeet(kilometers) {
//   var feet = kilometers * 3280.84;
//   document.writeln("Distance in feet: " + feet + "<br>");
// }

// function convertToInches(kilometers) {
//   var inches = kilometers * 39370.1;
//   document.writeln("Distance in inches: " + inches + "<br>");
// }

// function convertToCentimeters(kilometers) {
//   var cm = kilometers * 100000;
//   document.writeln("Distance in centimeters: " + cm + "<br>");
// }

// convertToMeters(km);
// convertToFeet(km);
// convertToInches(km);
// convertToCentimeters(km);

// Q9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

// var hoursWorked = +prompt("Enter total hours worked by the employee:");
// var overtimePay = 0;

// if (hoursWorked > 40) {
//   var overtimeHours = hoursWorked - 40;
//   overtimePay = overtimeHours * 12;
// }

// document.writeln("Overtime Pay: Rs. " + overtimePay);

// Q10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

// var amount = +prompt("Enter amount to withdraw (in rupees):");

// var hundredNotes = Math.floor(amount / 100);
// var remainder = amount % 100;

// var fiftyNotes = Math.floor(remainder / 50);
// remainder = remainder % 50;

// var tenNotes = Math.floor(remainder / 10);

// document.writeln("100 rupee notes: " + hundredNotes + "<br>");
// document.writeln("50 rupee notes: " + fiftyNotes + "<br>");
// document.writeln("10 rupee notes: " + tenNotes + "<br>");
