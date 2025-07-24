// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 5;
var num2 = 5;
var addNum = num1 + num2;

document.writeln(
    // `Sum of ${num1} and ${num2} is ${addNum}`
)

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = 5;
var num2 = 2;
var sumNum = num1 + num2;
var subtractNum = num1 - num2;
var multiplicationNum = num1 * num2;
var divideNum = num1 / num2;
var modulusNum = num1 % num2;

// document.writeln(
//     `Sum of ${num1} and ${num2} is ${sumNum} <br>
//     Subtraction of ${num1} and ${num2} is ${subtractNum} <br>
//     Multiplication of ${num1} and ${num2} is ${multiplicationNum} <br>
//     Division of ${num1} and ${num2} is ${divideNum} <br>
//     Modulus of ${num2} and ${num1} is ${modulusNum}`
// )

// Q3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

var number1;

// document.writeln(`Value after variable declaration is: ${number1} <br>`)

var number1 = 5;

// document.writeln(`Initial value: ${number1} <br>`)

number1 += 1;

// document.writeln(`Value after increment is: ${number1} <br>`)

number1 += 7;

// document.writeln(`Value after addition is: ${number1} <br>`)

number1 -= 1;

// document.writeln(`Value after decrement is: ${number1} <br>`)

var reminder = number1 % 3
// document.writeln(`The remainder is : ${reminder}`)

// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var ticketPrice = "600"

// document.writeln(
//     `
//     Total cost to buy 5 tickets to a movies is ${ticketPrice * 5}PKR
//     `
// )

// Q5. Write a script to display multiplication table of any number in your browser. 

// document.writeln(`
//     <h2>Table of 4</h2>
//     `)
//     for(i=1; i <= 10; i++){
//         document.writeln(`
//             4 x ${i} = ${4 * i} <br>
//             `)
//     }

// Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = 25;

var fahrenheit = (celsius * 9 / 5) + 32;
// document.writeln(`
//     ${celsius}°C is ${fahrenheit}°F <br>
//     `)

var fahrenheit2 = 70;

var celsius2 = (fahrenheit2 - 32) * 5 / 9;
// document.writeln(`
//     ${fahrenheit2}°F is ${celsius2}°C 
//     `)

// Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharge = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharge;

// document.writeln(
//     `
//     <h2>Shopping Cart</h2>
//     <p>Price of item1 is ${priceItem1}</p>
//     <p>Quantity of item1 is ${quantityItem1}</p>
//     <p>Price of item2 is ${priceItem2}</p>
//     <p>Quantity of item2 is ${quantityItem2}</p>
//     <p>Shipping Charges ${shippingCharge}</p>
//     Total cot of your order is ${totalCost}
//     `
// )

// Q8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var totalMarks = 980;
var obtainedMarks = 804;

// document.writeln(`
//     <h2>Marks Sheet</h2>
//     Total Marks: ${totalMarks}
//     Obtained Marks: ${obtainedMarks}
//     Percentage: ${obtainedMarks / totalMarks * 100}%
//     `)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var usd = 104.8;
var riyal = 28;

var totalPKR = (usd * 10) + (riyal * 25);

// document.writeln(`
//     <h1>Currency In PKR</h1>
//     <p>Total currency in PKR is : ${totalPKR}</p>
//     `)

// Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number = (5 + 5) * 10 / 2; 
//  alert(number);

// Q11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

var currentYear = 2025;
var birthYear = 2004;
var age = currentYear - birthYear

// document.writeln(
//     `
//     <h1>Age Calculator</h1>
//     <p>Current Year : ${currentYear}</p>
//     <p>Birth Year : ${birthYear}</p>
//     <p>Your Age : ${age}</p>
//     `
// )

// Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var pi = 3.14
var circumference = 2 * pi * radius;
var area = pi * radius * radius;


// document.writeln(`
//     <h1>The Geomtrizer</h1>
//     <p>Radius of a circle: ${radius}</p>
//     <p>The Circumference is: ${circumference}</p>
//     <p>The area is: ${area}</p>
//     `)

// Q13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

var fvrtSnack = "Dairy Milk";
var currentAge = 20;
var maxAge = 60;
var estSnackAmount = 2;
var yearsRemaining = maxAge - currentAge;
var totalSnacks = yearsRemaining * 365 * estSnackAmount;

// document.writeln(`
//     <h1>The Lifetime Supply Calculator</h1>
//     <p>Favourite snack: ${fvrtSnack}</p>
//     <p>Current Age: ${currentAge}</p>
//     <p>Estimated Maximum Age: ${maxAge}</p>
//     <p>Amount of Snacks per day: ${estSnackAmount}</p>
//     <p>You will need ${totalSnacks} ${fvrtSnack} to last you until the ripe old age of ${maxAge}</p>
//     `)
