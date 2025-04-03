const taskInput = document.getElementById("task-input")
const addTaskButton = document.getElementById("add-task-button")
const taskList = document.getElementById("task-list")

// Add task function
addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim()
    if (taskText === "") {
        alert("Please enter a task.")
        return
    }


// Create a new list item
const newTask = document.createElement("li")
const taskTextNode = document.createTextNode(taskText)

// Append the text to the new list item
newTask.appendChild(taskTextNode)

// Append the new task to the task list
taskList.appendChild(newTask)

// Clear the input field
taskInput.value = ""

// Removing the task


taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") { // check if li was clicked
        taskList.removeChild(event.target); // remove the clicked li 
    }
});

 
})


