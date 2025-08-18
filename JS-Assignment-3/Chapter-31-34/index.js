// 1. Write a program that displays current date and time in your browser.

// var date = new Date();
// document.writeln(`${date}`);

// 2. Write a program that alerts the current month in words.For example December

// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June",
//               "July", "August", "September", "October", "November", "December"];
// var monthIndex = date.getMonth(); 
// var monthName = months[monthIndex];

// alert(`Current month: ${monthName}`);

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" ,"Sat"];
// var date = new Date();

// var dayIndex = date.getDay();
// var day = days[dayIndex];
// alert(`Today is ${day}`);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var date = new Date();
// var dayIndex = date.getDay(); 

// if (dayIndex === 0 || dayIndex === 6) {
//     document.writeln("It's Fun day");
// }

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var date = new Date();
// var dateIndex = date.getDate();

// if(dateIndex <= 15){
//     document.writeln(`First fifteen days of the month`);
// }else{
//     document.writeln(`Last days of the month`);
// }

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var date = new Date();
// var milliseconds = date.getTime();
// var minutes = Math.floor(milliseconds / (1000 * 60));

// document.writeln(`Current date: ${date} <br>`);
// document.writeln(`Elapsed milliseconds since January 1, 1970: ${milliseconds} <br>`);
// document.writeln(`Elapsed Minutes since, Jan 1, 1970: ${minutes}`);

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var date = new Date();
// var hour = date.getHours();

// if(hour <= 12){
//     document.writeln(`Its AM`);
// }else{
//     document.writeln(`Its PM`);
// }

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var laterDate = new Date("December 31, 2020");
// document.writeln(`Later date: ${laterDate}`);

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan Note: 1st Ramadan was on June 18, 2015

// var startRamadan = new Date("June 18, 2015");
// var today = new Date();
// var diffInMs = today - startRamadan;
// var daysPast = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
// alert(`${daysPast} days have passed since 1st Ramadan, 2015`);

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var referenceDate = new Date(); 
// var startOf2015 = new Date("January 1, 2015 00:00:00");

// var diffInMs = referenceDate - startOf2015;

// var secondsElapsed = Math.floor(diffInMs / 1000);

// document.writeln(`On reference date ${referenceDate} <br>`)
// document.writeln(`${secondsElapsed} Seconds had passed since beginning of 2015`);

// var currentDate = new Date();

// document.writeln(`Current date: ${currentDate} <br>`);

// var oneHourAgo = new Date(currentDate);
// oneHourAgo.setHours(oneHourAgo.getHours() - 1);
// document.writeln(`1 hour ago, it was : ${oneHourAgo}`);

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var currentDate = new Date();

// alert(`Current date: ${currentDate}`);

// var hundredYearAgo = new Date(currentDate);
// hundredYearAgo.setFullYear(hundredYearAgo.getFullYear() - 100);
// alert(`100 years back, it was : ${hundredYearAgo}`);

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var userAge = +prompt("What's your age");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - userAge;

// document.writeln(`Your age is ${userAge} <br>`);
// document.writeln(`Your birth year is ${birthYear}`);

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var customerName = prompt("Enter customer name:");

// var months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var currentMonth = months[new Date().getMonth()];

// var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));

// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));

// var netAmountPayable = numberOfUnits * chargesPerUnit;

// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.writeln(`<h2>K-Electric Bill</h2>`);
// document.writeln(`Customer Name: <b>${customerName}</b><br>`);
// document.writeln(`Month: <b>${currentMonth}</b><br>`);
// document.writeln(`Number of units: <b>${numberOfUnits}</b><br>`);
// document.writeln(`Charges per unit: <b>${chargesPerUnit.toFixed(2)}</b><br><br>`);

// document.writeln(`Net Amount Payable (within Due Date): <b>${netAmountPayable.toFixed(2)}</b><br>`);
// document.writeln(`Late Payment Surcharge: <b>${latePaymentSurcharge.toFixed(2)}</b><br>`);
// document.writeln(`Gross Amount Payable (after Due Date): <b>${grossAmountPayable.toFixed(2)}</b><br>`);
