// Q1. Declare an empty array using JS literal notation to store student names in future.

// var studentNames = [];

// Q2. Declare an empty array using JS object notation to store student names in future.

// var studentNames = new Array();

// Q3. Declare and initialize a strings array.

// var fruits = ["Apple", "Banana", "Mango"];

// Q4. Declare and initialize a numbers array.

// var numbers = [5,10,15,20];

// Q5. Declare and initialize a boolean array.

// var booleans = [true , false];

// Q6. Declare and initialize a mixed array.

// var mixArray = ["Apple", 25 , true];

// Q7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// var pakistanEdu = ["SSC" , "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.Phil" , "phD"];

// document.writeln(`<h1>Qualifications</h1>`);
// document.writeln(`1) ${pakistanEdu[0]} <Br>`);
// document.writeln(`1) ${pakistanEdu[1]} <Br>`);
// document.writeln(`1) ${pakistanEdu[2]} <Br>`);
// document.writeln(`1) ${pakistanEdu[3]} <Br>`);
// document.writeln(`1) ${pakistanEdu[4]} <Br>`);
// document.writeln(`1) ${pakistanEdu[5]} <Br>`);
// document.writeln(`1) ${pakistanEdu[6]} <Br>`);
// document.writeln(`1) ${pakistanEdu[7]} <Br>`);

// Q8. Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:

// var student = ["Almas", "Insha", "Iqra"];
// var score = [480, 450, 400];
// var totalMarks = 500;

// var percentage1 =  score[0] / totalMarks * 100;
// var percentage2 =  score[1] / totalMarks * 100;
// var percentage3 =  score[2] / totalMarks * 100;

// document.writeln(`Score of ${student[0]}. Percentage: ${percentage1.toFixed(2)} <br>`);
// document.writeln(`Score of ${student[1]}. Percentage: ${percentage2.toFixed(2)} <br>`);
// document.writeln(`Score of ${student[2]}. Percentage: ${percentage3.toFixed(2)}`);

// Q9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// Q9 (a)
// var colors = ["Pink" , "Black" , "Blue", "Orange" , "Purple"];

// document.writeln(`<b>Original Colors:</b> ${colors} <br>`);

// var newColor = prompt("Which color do you want to add to the beginning");

// colors.unshift(newColor);

// document.writeln(`<b>Updated Colors:</b> ${colors}`);

// Q9 (b)

// var colors = ["Pink" , "Black" , "Blue", "Orange" , "Purple"];

// document.writeln(`<b>Original Colors:</b> ${colors} <br>`);

// var newColor = prompt("Which color do you want to add to the end");

// colors.push(newColor);

// document.writeln(`<b>Updated Colors:</b> ${colors}`);

// Q9 (c)

// var colors = ["Pink" , "Black" , "Blue", "Orange" , "Purple"];

// document.writeln(`<b>Original Colors:</b> ${colors} <br>`);

// colors.unshift("Red" , "Green");

// document.writeln(`<b>Updated Colors:</b> ${colors}`);

// Q9 (d)

// var colors = ["Pink" , "Black" , "Blue", "Orange" , "Purple"];

// document.writeln(`<b>Original Colors:</b> ${colors} <br>`);

// colors.shift(colors);

// document.writeln(`<b>Updated Colors:</b> ${colors}`);

// Q9 (e)

// var colors = ["Pink" , "Black" , "Blue", "Orange" , "Purple"];

// document.writeln(`<b>Original Colors:</b> ${colors} <br>`);

// colors.pop(colors);

// document.writeln(`<b>Updated Colors:</b> ${colors}`);

// Q9 (f)

// var colors = ["Pink" , "Black" , "Blue", "Orange" , "Purple"];

// document.writeln(`<b>Original Colors:</b> ${colors} <br>`);

// var addIndex = +prompt("At which Index number do you want to add color");
// var addColor = prompt("which color do you want to add");

// colors.splice(addIndex, 0, addColor);

// document.writeln(`<b>Updated Colors:</b> ${colors}`);

// Q9 (g)

// var colors = ["Pink" , "Black" , "Blue", "Orange" , "Purple"];

// document.writeln(`<b>Original Colors:</b> ${colors} <br>`);

// var deleteIndex = +prompt("At which Index number do you want to delete color");
// var deleteColor = prompt("How many colors do you want to delete");

// colors.splice(deleteIndex, deleteColor);

// document.writeln(`<b>Updated Colors:</b> ${colors}`);

// Q10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var scores = [100 , 30 , 75];
// document.writeln(`<b>Original Scores:</b> ${scores} <br>`);

// scores.sort(function(a,b){
//     return a - b
// });

// document.writeln(`<b>Ascending Order Scores:</b> ${scores}`);

// Q11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.

// var citites = ["Karachi", "Islamabad", "Quetta", "Multan"];
// document.writeln(`<b>Cities List:</b> ${citites} <br>`);

// var selectedCities = citites.slice(0,3);
// document.writeln(`<b>Selected Cities List:</b> ${selectedCities}`);

// Q12. Write a program to create a single string from the below mentioned array: var arr =[“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

// var arr =["This", "is", "my", "cat"];
// document.writeln(`<b>Array:</b> ${arr} <br>`);

// document.writeln(`<b>String:</b> ${arr.join(" ")} <br>`);

// Q13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var books = [];

// books.push("Physics");
// books.push("Chemistry");
// books.push("Biology");
// books.push("PST");

//  document.writeln(`<b>Original Books:</b> ${books} <br>`);

// document.writeln("Out" +"<br>" + books.shift() + "<br>"); 
// document.writeln("Out" +"<br>" + books.shift() + "<br>"); 
// document.writeln("Out" +"<br>" + books.shift() + "<br>"); 
// document.writeln("Out" +"<br>" + books.shift() + "<br>"); 

// Q14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

// var books = [];

// books.push("Physics");
// books.push("Chemistry");
// books.push("Biology");
// books.push("PST");

// document.writeln(`<b>Original Books:</b> ${books} <br>`);

// document.writeln("Out" +"<br>" + books.pop() + "<br>");
// document.writeln("Out" +"<br>" + books.pop() + "<br>"); 
// document.writeln("Out" +"<br>" + books.pop() + "<br>"); 
// document.writeln("Out" +"<br>" + books.pop() + "<br>"); 

// Q15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.writeln("<label><b>Select Phone Manufacturer:</b></label><br><br>");
// document.writeln("<select>");

// for (var i = 0; i < manufacturers.length; i++) {
//     document.writeln("<option>" + manufacturers[i] + "</option>");
// }

// document.writeln("</select>");