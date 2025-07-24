// Q1. Write a program to take a number in a variable, do the equired arithmetic to display the following result in your browser:

var a = 10;

// document.writeln(`<h1>Result:</h1> <br>`)
// document.writeln(`The value of a is : ${a} <br> <br>`)
// document.writeln(`The value of ++a is : ${++a} <br>`)
// document.writeln(`Now the value of a is : ${a} <br> <br>`)
// document.writeln(`The value of a++ is : ${a++} <br>`)
// document.writeln(`Now the value of a is : ${a} <br> <br>`)

// document.writeln(`The value of --a is : ${--a} <br>`)
// document.writeln(`Now the value of a is : ${a} <br> <br>`)
// document.writeln(`The value of a-- is : ${a--} <br>`)
// document.writeln(`Now the value of a is : ${a} <br> <br>`)

// Q2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2; 1
b = 1;
var result = --a - --b + ++b + b--;

// console.log("a =", a);       // 1
// console.log("b =", b);       // 0
// console.log("result =", result); // 3

// 1) --a 
//    a becomes 1

// 2) --a - --b;
//    1 - 0 = 1
//    a = 1 , b = 0

// 3) --a - --b + ++b ;
    // 1  - 0   + 1 = 2
    // a = 1 , b = 1

// 4) --a - --b + ++b + b--;
    // 1 - 0 + 1 + 1 = 3
    // a = 1 , b = 0


// Q3. Write a program that takes input a name from user & greet the user.

// var userName = prompt("What is your name?")
// alert(`Hello! ${userName} Welcome to our website`)

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// var number = +prompt("Enter a number")

// if(!number){
//     number = 5;
// }
// for(i=1; i <= 10 ; i++){
// document.writeln(`${number} x ${i} = ${i * number} <br>`)
// }

// Q6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var sub1 = prompt("Enter your 1st Subject: ");
var sub2 = prompt("Enter your 2nd Subject: ");
var sub3 = prompt("Enter your 3rd Subject: ");

var marksSub1 = 100;
var marksSub2 = 100;
var marksSub3 = 100;

var obtmarksub1 = +prompt(`Enter your ${sub1} obtained Marks :`)
var obtmarksub2 = +prompt(`Enter your ${sub2} obtained Marks :`)
var obtmarksub3 = +prompt(`Enter your ${sub3} obtained Marks :`)

var totalMarks = marksSub1 + marksSub2 + marksSub3;
var obtainedMarks = obtmarksub1 + obtmarksub2 + obtmarksub3;
var percentageSub1 = obtmarksub1 / marksSub1 * 100;
var percentageSub2 = obtmarksub2 / marksSub2 * 100;
var percentageSub3 = obtmarksub3 / marksSub3 * 100;
var totalPer = obtainedMarks / totalMarks * 100;


document.writeln(`
    <h2>Marks Sheet</h2>
    <table border="1" cellpadding="8" cellspacing="0">
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${sub1}</td>
            <td>${marksSub1}</td>
            <td>${obtmarksub1}</td>
            <td>${percentageSub1}%</td>
        </tr>
        <tr>
            <td>${sub2}</td>
            <td>${marksSub2}</td>
            <td>${obtmarksub2}</td>
            <td>${percentageSub2}%</td>
        </tr>
        <tr>
            <td>${sub3}</td>
            <td>${marksSub3}</td>
            <td>${obtmarksub3}</td>
            <td>${percentageSub3}%</td>
        </tr>
        <tr>
            <th colspan="1">Total</th>
            <th>${totalMarks}</th>
            <th>${obtainedMarks}</th>
            <th>${totalPer}%</th>
        </tr>
    </table>
`);
