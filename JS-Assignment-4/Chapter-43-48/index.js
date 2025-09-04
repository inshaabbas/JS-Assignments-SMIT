// Q1. Show an alert box on click on a link.

// document.getElementById('alertLink').onclick = function() {
//     alert('Hello! This is an alert box.');
//   };

// Q2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

// var images = document.getElementsByClassName('purchaseAlert');

// for (var i = 0; i < images.length; i++) {
//   images[i].onclick = function() {
//     alert('Thanks for purchasing a phone from us');
//   };
// }

// Q3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.

// var students = [
//     { name: "Ali" },
//     { name: "Fatima" },
//     { name: "Ahmed" },
//     { name: "Sara" },
//     { name: "Usman" },
//     { name: "Ayesha" },
//     { name: "Bilal" },
//     { name: "Hina" },
//     { name: "Zain" },
//     { name: "Maryam" }
//   ];

//   var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

//   for (var i = 0; i < students.length; i++) {
//     var row = tableBody.insertRow();

//     var nameCell = row.insertCell(0);
//     var actionCell = row.insertCell(1);

//     nameCell.innerHTML = students[i].name;

//     var delBtn = document.createElement("button");
//     delBtn.innerHTML = "Delete";
//     delBtn.onclick = function () {
//       var rowToDelete = this.parentNode.parentNode;
//       rowToDelete.parentNode.removeChild(rowToDelete);
//     };

//     actionCell.appendChild(delBtn);
//   }

// Q4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

// Check Answer in HTML File

// Q5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

// var count = 0; 
//     var counterDisplay = document.getElementById("counterValue");

//     function increase() {
//       count++;
//       counterDisplay.innerHTML = count;
//     }

//     function decrease() {
//       count--;
//       counterDisplay.innerHTML = count;
//     }