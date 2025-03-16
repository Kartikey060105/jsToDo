const addTask = document.getElementById("tasks");
const addButton = document.getElementById("addBtn");
const inp = document.getElementById("taskInp");
const removeTask = document.getElementById("tasksDone");


addButton.addEventListener("click", function () {
  if (inp.value != "") {
    const task = document.createElement("div");
    const button = document.createElement("button");
    const taskText = document.createTextNode(inp.value);

    task.appendChild(button);
    task.appendChild(taskText);
    addTask.appendChild(task);

    inp.value = "";

    button.style.margin = "10px"
    button.style.padding = "5px"

    button.addEventListener("click", function () {
        const doneTask = document.createElement("div");
        doneTask.textContent = taskText.textContent;

        doneTask.style.textDecoration = "line-through"

        removeTask.appendChild(doneTask);

        
        
        task.remove(); 
      });

  }
});

