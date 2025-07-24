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

// var tableNumber = +prompt("Enter table number to show it's multiplication table");
// var tableLength = +prompt("Enter table length");

// document.writeln(`<h2>Multiplication of ${tableNumber}</h2>`)
// document.writeln(`<h2>Length of ${tableLength}</h2>`)

// for(i=1; i <= tableLength; i++){
//     document.writeln(`${tableNumber} x ${i} = ${tableNumber * i} <br>`)
// }

// Q5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

// fruits = ["apple", "banana", "mango", "orange","strawberry"];

// for(i=0; i < fruits.length; i++ ){
//     document.writeln(`${fruits[i]} <br><br>`);
// }

// document.writeln(`Element at index 0 is ${fruits[0]} <br>`);
// document.writeln(`Element at index 1 is ${fruits[1]} <br>`);
// document.writeln(`Element at index 2 is ${fruits[2]} <br>`);
// document.writeln(`Element at index 3 is ${fruits[3]} <br>`);
// document.writeln(`Element at index 4 is ${fruits[4]} <br>`);

// Q6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Q6 (a)

document.writeln(`<h2>Counting</h2> <br>`);

for( var i=1; i <= 15; i++){
    document.writeln(`${i} ,`);
}


document.writeln(`<h2>Reverse</h2> <br>`);

for( var i=10; i >= 1; i--){
    document.writeln(`${i} ,`);
}

document.writeln(`<h2>Even</h2> <br>`);

for( var i=0; i <= 20; i += 2){
    document.writeln(`${i} ,`);
}

document.writeln(`<h2>Odd</h2> <br>`);

for( var i=1; i <= 20; i += 2){
    document.writeln(`${i} ,`);
}

document.writeln(`<h2>Series</h2> <br>`);

for( var i=2; i <= 20; i += 2){
    document.writeln(`${i}k ,`);
}
