// Q1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;

// alert(`Welcome to our Website ${fullName}`);

// Q2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var fvrtMobl = prompt("What's your favourite mobile phone model");
// document.writeln(`My favourite phone is: ${fvrtMobl} Length of string : ${fvrtMobl.length}`);

// Q3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var country = "Pakistani";
// document.writeln(`String : ${country} <br> Index of 'n': ${country.indexOf("n")}`);

// // Q4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var msg = "Hello World";
// document.writeln(`String: ${msg} <br> Last index of 'l' is: ${msg.lastIndexOf("l")}`)

// Q5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var country = "Pakistani";
// document.writeln(`String: ${country} <br> Character at index 3 : ${country.charAt(3)}`);

// Q6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" " , lastName);
// alert(`Welcome to our Website ${fullName}`);  

// Q7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";

// document.writeln(`
//     City : ${city} <br>
//     After Replacement : ${city.replace("Hyder" , "Islam")}
//     `);

// Q8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.writeln(`
//     Original Message : ${message} <br>
//     Updated Message : ${message.replace( /and/g , "&")}
//     `);  

// Q9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var num = "472";
// document.writeln(`Value: ${num} <br> Type: ${typeof num} <br> `); 
// document.writeln(`Value: ${num} <br> Type: ${typeof parseInt(num)}`);

// Q10. Write a program that takes user input. Convert and show the input in capital letters.

// var userName = prompt("Enter your username");
// document.writeln(`User input: ${userName} <br> Upper Case: ${userName.toUpperCase()}`);

// Q11. Write a program that takes user input. Convert and show the input in title case.

// var skills = prompt("Enter your any skill");
// var titleCase = skills.charAt(0).toUpperCase() + skills.slice(1).toLowerCase();
// document.writeln(`User input: ${skills} <br> Upper Case: ${titleCase}`);

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var numStr = num.toString().replace(".", "");

// document.writeln(`Number: ${num} <br>`);
// document.writeln(`Result: ${num.toString().replace(".", "")}`);

// Q13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var userName = prompt("Enter your username");

if(userName === ){}