function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    input.value = "";
  
    if (task === "") {
        alert("Enter Task!!!");
        return;
    }
  
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);
  }