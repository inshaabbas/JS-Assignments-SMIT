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

// Q13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userName = prompt("Enter your username");
// while (
//     userName.indexOf("@") !== -1 ||
//     userName.indexOf("!") !== -1 ||
//     userName.indexOf(",") !== -1 ||
//     userName.indexOf(".") !== -1
//     ) {
//     alert("Invalid username! It should not contain @ . , !");
//     userName = prompt("Please enter a valid username:");
// }
// alert("Username: " + userName);

// Q14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var customer = prompt("What do you want to buy?");

// var searchItem = customer.toLowerCase();
// var foundIndex = -1;

// for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i].toLowerCase() === searchItem) {
//         foundIndex = i;
//         break;
//     }
// }
// if (foundIndex !== -1) {
//     alert(customer + " is available at index " + foundIndex + " in our bakery.");
// } else {
//     alert("We are sorry. " + customer + " is not available in our bakery.");
// }

// Q15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long If the password does not meet above requirements,
// prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var password = prompt("Enter your password:");

// while (true) {
//     var hasLetter = false;
//     var hasNumber = false;

//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//     }
//     else if (
//         password.charAt(0) >= '0' &&
//         password.charAt(0) <= '9'
//     ) {
//         alert("Password should not start with a number.");
//     }
//     else {
//         for (var i = 0; i < password.length; i++) {
//             var char = password.charAt(i);

//             if (
//                 (char >= 'a' && char <= 'z') ||
//                 (char >= 'A' && char <= 'Z')
//             ) {
//                 hasLetter = true;
//             }

//             if (char >= '0' && char <= '9') {
//                 hasNumber = true;
//             }
//         }

//         if (hasLetter && hasNumber) {
//             alert("Password accepted!");
//             break;
//         } else {
//             alert("Password must contain both letters and numbers.");
//         }
//     }

//     password = prompt("Enter a valid password:");
// }

// Q16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var uni = "University of karachi";
// var char = uni.split("");

// for(i=0; i < char.length; i++){
//     document.writeln(`${char[i]} <br>`)
// }

// Q17. Write a program to display the last character of a user input.

// var user = prompt("Enter a user name");
// var lastChar = user.charAt(user.length - 1);

// document.writeln(`UserInput: ${user}`);
// document.writeln(`Last characterof input: ${lastChar}`);

// Q18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var sentence = "The quick brown fox jumps over the lazy dog";
// var words = sentence.toLowerCase().split(" ");
// var count = 0;

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.writeln(`Text: ${sentence} <br>`);
// document.writeln(`There are ${count} occurrences of word "the".`);
