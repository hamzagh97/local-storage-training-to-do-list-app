let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = function () {
  theInput.focus();
};

theAddButton.onclick = function() {
  if (theInput.value === "") {
    return false;
  } else {
    noTasksMsg.remove();
    let task = document.createElement("span");
    task.className = "task-box";
    task.append(document.createTextNode(theInput.value));
    let deleteBtn = document.createElement("span");
    deleteBtn.append(document.createTextNode("delete"));
    deleteBtn.className = "delete";
    task.append(deleteBtn);
    tasksContainer.append(task);
  }
  theInput.value = "";
  calculateTasks();
}

document.addEventListener('click', function (e) {
  if (e.target.className == 'delete') {
    e.target.parentNode.remove();
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }

  if (e.target.classList.contains('task-box')) {
    e.target.classList.toggle("finished");
  }
  
  calculateTasks();
})

function createNoTasks() {
  let msgSpan = document.createElement("span");
  let msgText = document.createTextNode("No Tasks To Show");

  msgSpan.appendChild(msgText);
  msgSpan.className = 'no-tasks-message';
  tasksContainer.appendChild(msgSpan);
}

function calculateTasks() {
  tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}