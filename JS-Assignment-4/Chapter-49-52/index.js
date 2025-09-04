// Q1. Create a signup form and display form data in your web page on submission.

// function handleSubmit(event) {
//       event.preventDefault(); 

//       var name = document.getElementById("name").value;
//       var email = document.getElementById("email").value;
//       var password = document.getElementById("password").value;

//       var outputDiv = document.getElementById("output");
//       outputDiv.innerHTML =
//         "<strong>Signup Successful!</strong><br>" +
//         "Name: " + name + "<br>" +
//         "Email: " + email + "<br>" +
//         "Password: " + password;
//     }

// Q2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. 

//  function toggleReadMore() {
//       var dots = document.getElementById("dots");
//       var moreText = document.getElementById("moreText");
//       var btn = document.getElementById("readBtn");

//       if (moreText.style.display === "none") {
        
//         moreText.style.display = "inline";
//         dots.style.display = "none";
//         btn.textContent = "Read less";
//       } else {
       
//         moreText.style.display = "none";
//         dots.style.display = "inline";
//         btn.textContent = "Read more";
//       }
//     }

// Q3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

// var selectedRow = null;

// function addStudent(event) {
//   if (event.preventDefault) event.preventDefault();

//   var name = document.getElementById("name").value;
//   var studentClass = document.getElementById("studentClass").value;
//   var rollNo = document.getElementById("rollNo").value;

//   var table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow();

//   var nameCell = newRow.insertCell(0);
//   var classCell = newRow.insertCell(1);
//   var rollCell = newRow.insertCell(2);
//   var actionCell = newRow.insertCell(3);

//   nameCell.innerText = name;
//   classCell.innerText = studentClass;
//   rollCell.innerText = rollNo;

//   var editBtn = document.createElement("button");
//   editBtn.innerHTML = "Edit";
//   editBtn.onclick = function () {
//     showEditForm(newRow);
//   };

//   var deleteBtn = document.createElement("button");
//   deleteBtn.innerHTML = "Delete";
//   deleteBtn.style.marginLeft = "10px";
//   deleteBtn.onclick = function () {
//     table.deleteRow(newRow.rowIndex - 1);
//     hideEditForm();
//   };

//   actionCell.appendChild(editBtn);
//   actionCell.appendChild(deleteBtn);

//   document.getElementById("studentForm").reset();
// }

// function showEditForm(row) {
//   selectedRow = row;
//   document.getElementById("editName").value = row.cells[0].innerText;
//   document.getElementById("editClass").value = row.cells[1].innerText;
//   document.getElementById("editRollNo").value = row.cells[2].innerText;

//   document.getElementById("editForm").style.display = "block";
// }

// function updateStudent(event) {
//   if (event.preventDefault) event.preventDefault();

//   if (selectedRow !== null) {
//     selectedRow.cells[0].innerText = document.getElementById("editName").value;
//     selectedRow.cells[1].innerText = document.getElementById("editClass").value;
//     selectedRow.cells[2].innerText = document.getElementById("editRollNo").value;

//     hideEditForm();
//   }
// }

// function hideEditForm() {
//   document.getElementById("editForm").style.display = "none";
//   selectedRow = null;
// }