var newTask = document.getElementById("newTask");
var ul = document.getElementById("task");

var newTask = document.getElementById("newTask");
var ul = document.getElementById("task");
var errorMsg = document.getElementById("error");

// Add Task
function addTask() {
  var taskValue = newTask.value.trim();

  if (taskValue === "") {
    errorMsg.textContent = "Task cannot be empty.";
    return;
  }

  errorMsg.textContent = ""; // Clear error

  var li = document.createElement("li");

  var topRow = document.createElement("div");
  topRow.className = "task-top";

  var taskText = document.createElement("span");
  taskText.textContent = taskValue;

  var buttonDiv = document.createElement("div");
  buttonDiv.className = "button-group";

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.setAttribute("onclick", "deleteTask(this)");

  var editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editBtn.setAttribute("onclick", "editTask(this)");

  buttonDiv.appendChild(deleteButton);
  buttonDiv.appendChild(editBtn);

  topRow.appendChild(taskText);
  topRow.appendChild(buttonDiv);

  var bottomRow = document.createElement("div");
  bottomRow.className = "edit-container";
  bottomRow.style.display = "none";

  li.appendChild(topRow);
  li.appendChild(bottomRow);

  ul.appendChild(li);
  newTask.value = "";
}

newTask.addEventListener("input", () => {
  if (newTask.value.trim() !== "") {
    errorMsg.textContent = "";
  }
});


// Edit 
function editTask(btn) {
  var li = btn.closest("li");
  var topRow = li.querySelector(".task-top");
  var bottomRow = li.querySelector(".edit-container");

  if (bottomRow.style.display === "flex") {
    return;
  }

  var currentText = topRow.querySelector("span").textContent;

  var input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.style.padding = "8px";

  var saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.className = "saveBtn";

  saveBtn.onclick = function () {
    var newValue = input.value.trim();
    if (newValue === "") {
      alert("Task cannot be empty!");
      return;
    }
    topRow.querySelector("span").textContent = newValue;
    bottomRow.style.display = "none";
    bottomRow.innerHTML = "";
  };

  bottomRow.innerHTML = "";
  bottomRow.appendChild(input);
  bottomRow.appendChild(saveBtn);
  bottomRow.style.display = "flex";
}

function deleteTask(btn) {
  var li = btn.closest("li");
  li.remove();
}

// Delete all 
function deleteAll() {
  ul.innerHTML = "";
}