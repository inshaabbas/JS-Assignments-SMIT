// Q1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var multiArray = [[], [], []];

// Q2. Declare and initialize a multidimensional array representing the following matrix:

// var matrix = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

// Q3. Write a program to print numeric counting from 1 to 10.

// var numericCount = [1,2,3,4,5,6,7,8,9,10];

// for(i=0; i < numericCount.length; i++){
//     document.writeln(`${numericCount[i]} <br>`)
// }

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var tableNumber = +prompt("Enter table number");
var tableLength = +prompt("Enter table length");

for(i=1; i < tableLength; i++){
    document.writeln(`${tableNumber} x ${} = ${tableNumber * tableLength}`)
}