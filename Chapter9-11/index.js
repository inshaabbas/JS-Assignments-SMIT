//  Q1 Write a program to take “city” name as input from user. If user enters “Karachi”,welcome the user like this: “Welcome to city of lights”

// var cityName = prompt("Which is your favourite City ")

// if(cityName === "Karachi"){
//     document.writeln(`<h1>Welcome to city of lights</h1>`)
// }else{
//     document.writeln(`<h1>Welcome to Your favourite City</h1>`)
// }

// Q2 Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("What's your Gender")

// if(gender === "Male" || gender === "male"){
//     alert("Good Morning Sir")
// }else if(gender === "Female" || gender === "female"){
//     alert("Good Morning Ma'am")
// }else{
//     alert("Invalid")
// }

// Q3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// var signalColors = prompt("Enter any one color of road traffic signal")

// if(signalColors === "Red" || signalColors === "red"){
//     alert("Must Stop");
// }else if(signalColors === "Yellow" || signalColors === "yellow"){
//     alert("Ready to move");
// }else if(signalColors === "Green" || signalColors === "green"){
//     alert("Move now");
// }else{
//     alert("Invalid color");
// }

// Q4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var remainingFuel = prompt("How much remaining fuel in car");

// if(remainingFuel < "0.25litres"){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("Your fuel is enough for drive")
// }

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); // Showing alert
// }

// b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");// Not Showing alert
// }

// c
// var c = 12; // 13 // 14
// if (c++ === 13){
// alert("condition 1 is true");// not showing alert
// }
// if (c === 13){
// alert("condition 2 is true");// showing alert
// }
// if (++c < 14){
// alert("condition 3 is true");// not showing alert
// }
// if(c === 14){
// alert("condition 4 is true"); // showing alert
// }

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals"); // alert showing
// }

// e
// if (true){
// alert("True"); // alert showing
// }
// if (false){
// alert("False"); alert not showing
// }

// f
// if("car" < "cat"){
// alert("car is smaller than cat"); // alert showing
// }

// Q6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// var sub1 = +prompt("Enter marks for Subject 1: ");
// var sub2 = +prompt("Enter marks for Subject 2: ");
// var sub3 = +prompt("Enter marks for Subject 3: ");
// var totalMarks = +prompt("Enter total marks: ");

// var obtainedMarks = sub1 + sub2 + sub3;
// var percentage = obtainedMarks / totalMarks * 100;

// var grade;
// var remarks;
// if(percentage >= 80){
//     grade = "A-One";
//     remarks = "Excellent";
// }else if(percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }else if(percentage >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// }else{
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.writeln("<h1>Mark Sheet</h1>")
// document.writeln(`Total marks :${totalMarks} <br>`)
// document.writeln(`Obtained marks :${obtainedMarks} <br>`)
// document.writeln(`Percentage :${percentage} <br>`)
// document.writeln(`Grade :${grade} <br>`)
// document.writeln(`Remarks :${remarks}`)

// Q7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var secretNum = 5;
// var guessNum = +prompt("Guess the Number from 1 to 10");

// if(guessNum === secretNum){
//     document.writeln("<h1>Bingo! Correct answer</h1>");
// }else if(guessNum === secretNum + 1){
//     document.writeln("<h1>Close enough to the correct answer</h1>");
// }else{
//     alert("Try Again");
// }

// Q8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var checkNum = +prompt("Enter a Number to check if it is divisible by 3 or not")

// if(checkNum % 3 === 0){
//     alert("It is divisible by 3")
// }else{
//     alert("It is not divisible by 3")
// }

// Q9. Write a program that checks whether the given input is an even number or an odd number.

// var number = +prompt("Enter a number to check whether its Odd or Even");

// if(number % 2 === 0){
//     alert("Even Number!")
// }else{
//     alert("Odd Number!")
// }

// Q10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = +prompt("Enter a Temperature of Karachi");

// if(temperature > 40){
//     alert("It is too hot outside.");
// }else if(temperature > 30){
//     alert("The Weather today is Normal.");
// }else if(temperature > 20){
//     alert("Today's Weather is cool.");
// }else if(temperature > 10){
//     alert("OMG! Today's weather is so Cool.");
// }else{
//     alert("Wear warm clothes it's too cold outside!")
// }

// Q11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var firstNum = +prompt("Enter first number");
// var secondNum = +prompt("Enter second number");
// var operation = prompt("Select operator : +, -, *, /, %")

// if(operation === "+"){
//     alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
// }else if(operation === "-"){
//     alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
// }else if(operation === "*"){
//     alert(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
// }else if(operation === "/"){
//     alert(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
// }else if(operation === "%"){
//     alert(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
// }else{
//     alert("Invalid operator. Please enter +, -, *, /, or %")
// }