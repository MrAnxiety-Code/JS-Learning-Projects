var toDoList = document.getElementById('toDoList');
var taskArr = localStorage.getItem('TODO') ? JSON.parse(localStorage.getItem('TODO')) : [];

function buildToDoList() {
//Check if there is a saved task in local storage
if(localStorage.getItem('TODO') != null){
    //Get the saved task from local storage
    console.log("taskArr: " + taskArr);
    localStorage.clear(); //clear local storage to prevent duplicates
    console.log("localStorage: " + localStorage.getItem('TODO'));
    taskArr.forEach(loadTask);
}
else{
    return; //do nothing if there are no saved tasks
}
}

function loadTask(taskSlice) {
    let li = document.createElement('li');
    toDoList.appendChild(li);
    if(taskSlice.slice(0,1) == 't'){
        addTask(taskSlice.slice(4), true);
    }
    else{
        addTask(taskSlice.slice(5));
    }
}

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

function addTask(task,loadCheckbox){
    if(task != ''){
        var li = toDoList.lastElementChild;
        //Remove the textbox and save button if they exist
        let taskTextBox = document.getElementById('taskTextBox');
        let saveNewTaskButton = document.getElementById('saveNewTaskButton');
        if(taskTextBox){
            taskTextBox.remove();
        }
        if(saveNewTaskButton){
            saveNewTaskButton.remove();
        }
        //Create a checkbox for the task
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${taskArr.length}`;
        if(loadCheckbox){
            checkbox.checked = loadCheckbox;
        }
        checkbox.addEventListener('click', function(){
            taskArr[checkbox.id] = `${checkbox.checked}${task}`;
            localStorage.setItem('TODO', JSON.stringify(taskArr));
        });
        li.appendChild(checkbox);
        //Create a label for the task, this is what stores the task
        let label = document.createElement('label');
        label.htmlfor = `${taskArr.length}`;
        label.innerHTML = task;
        li.appendChild(label);
        //Add the task to the array and local storage
        taskArr.push(`${checkbox.checked}${task}`);
        localStorage.setItem('TODO', JSON.stringify(taskArr));
        console.log("localStorage at end of addTask: " + localStorage.getItem('TODO'));
        return; //return to prevent the task from being added again
    }
    else {
        return; //do nothing if the task is empty
    }
}

function clearAllTasks(){
    toDoList.replaceChildren();
    taskArr = [];
    localStorage.clear();
}