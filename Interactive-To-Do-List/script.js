var toDoList = document.getElementById('toDoList');
var taskMap = new Map();

function nameTask() {
    //Create a new list item for the new task
    let li = document.createElement('li');
    toDoList.appendChild(li);
    //Textbox for input
    let task = document.createElement('input');
    task.type = 'text';
    task.id = 'taskTextBox';
    li.appendChild(task);
    //Button for saving the task
    let saveTask = document.createElement('button');
    saveTask.innerHTML = 'Save';
    saveTask.id = 'saveNewTaskButton';
    saveTask.addEventListener('click', function(){addTask(task.value);});
    li.appendChild(saveTask);
}

function addTask(task){
    if(task != ''){
        let li = toDoList.lastElementChild;
        //Remove the textbox and save button
        let taskTextBox = document.getElementById('taskTextBox');
        let saveNewTaskButton = document.getElementById('saveNewTaskButton');
        taskTextBox.remove();
        saveNewTaskButton.remove();
        //Create a checkbox for the task
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task${taskMap.size}`;
        checkbox.addEventListener('click', function(){taskMap.set(checkbox.id,`${checkbox.checked}${task}`);});
        li.appendChild(checkbox);
        //Create a label for the task, this is what stores the task
        let label = document.createElement('label');
        label.htmlfor = `task${taskMap.size}`;
        label.innerHTML = task;
        li.appendChild(label);
        //Add the task to the map
        taskMap.set(taskMap.size,`${checkbox.checked}${task}`);
    }
    else {
        return; //do nothing if the task is empty
    }
}

function clearAllTasks(){
    toDoList.replaceChildren();
    taskMap.clear();
}