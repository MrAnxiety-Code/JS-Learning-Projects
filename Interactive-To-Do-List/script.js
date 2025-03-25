var toDoList = document.getElementById('toDoList');
var taskArray = [];

function nameTask() {
    let li = document.createElement('li');
    toDoList.appendChild(li);
    let task = document.createElement('input');
    task.type = 'text';
    task.id = 'taskTextBox';
    li.appendChild(task);
    let saveTask = document.createElement('button');
    saveTask.innerHTML = 'Save';
    saveTask.id = 'saveNewTaskButton';
    li.appendChild(saveTask);
    saveTask.addEventListener('click', function(){addTask(task.value);});
}

function addTask(task){
    if(task != ''){
        let li = toDoList.lastElementChild;
        let taskTextBox = document.getElementById('taskTextBox');
        let saveNewTaskButton = document.getElementById('saveNewTaskButton');
        taskTextBox.remove();
        saveNewTaskButton.remove();
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task${taskArray.length}`;
        checkbox.htmlfor = `task${taskArray.length}`;
        li.appendChild(checkbox);
        let label = document.createElement('label');
        label.innerHTML = task;
        li.appendChild(label);
        taskArray.push(task);
    }
    else {
        return; //do nothing if the task is empty
    }
}

function clearAllTasks(){
    toDoList.replaceChildren();
    taskArray = [];
}