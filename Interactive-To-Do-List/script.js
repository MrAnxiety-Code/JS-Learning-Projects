var toDoList = document.getElementById('toDoList');
var taskArr = [];

function buildToDoList() {
//Check if there is a saved task in local storage
if(localStorage.getItem('TODO') != null){
    //Get the saved task from local storage and parse it into an array that is local to this function
    //This is done to prevent duplicates in taskArr and local storage
    let loadArr = JSON.parse(localStorage.getItem('TODO'));
    console.log("loadArr: " + loadArr);
    localStorage.clear(); //clear local storage to prevent duplicates
    console.log("localStorage: " + localStorage.getItem('TODO'));
    loadArr.forEach(loadTask);
}
else{
    return; //do nothing if there are no saved tasks
}
}

function loadTask(taskSlice) {
    if(taskSlice != null){
    let li = document.createElement('li');
    toDoList.appendChild(li);
    if(taskSlice.slice(0,1) == 't'){
        addTask(taskSlice.slice(4), true);
    }
    else{
        addTask(taskSlice.slice(5));
    }
    }
    else{
        return; //do nothing if the task is null
    }
}

function nameTask() {
    //Create a new list item for the new task
    let li = document.createElement('li');
    li.id = 'newTask';
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
    //Button to cancel creating a new task
    let cancelTask = document.createElement('button');
    cancelTask.innerHTML = 'Cancel';
    cancelTask.id = 'cancelNewTaskButton';
    cancelTask.addEventListener('click', function(){li.remove();}); //removing li removes all the children as well
    li.appendChild(cancelTask);
}

function addTask(task,loadCheckbox){
    if(task != ''){
        var li = toDoList.lastElementChild;
        //Remove the textbox and buttons if they exist
        let taskTextBox = document.getElementById('taskTextBox');
        let saveNewTaskButton = document.getElementById('saveNewTaskButton');
        let cancelNewTaskButton = document.getElementById('cancelNewTaskButton');
        if(taskTextBox){
            taskTextBox.remove();
        }
        if(saveNewTaskButton){
            saveNewTaskButton.remove();
        }
        if(cancelNewTaskButton){
            cancelNewTaskButton.remove();
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
        //Create a label for the task, this is what stores the content of the task
        let label = document.createElement('label');
        label.htmlfor = `${taskArr.length}`;
        label.innerHTML = task;
        li.appendChild(label);
        //Create a delete button for the task
        let deleteTask = document.createElement('button');
        deleteTask.innerHTML = 'Delete';
        deleteTask.id = 'deleteTaskButton';
        deleteTask.addEventListener('click', function(){
            delete taskArr[checkbox.id]; //remove the task from the array, what remains is a null value
            localStorage.setItem('TODO', JSON.stringify(taskArr)); //update local storage
            taskArr = []; //clear the array to prevent duplicates
            toDoList.replaceChildren(); //remove all the tasks from the list to prevent duplicates
            buildToDoList(); //rebuild the list, updating the index ID (checkbox.id) of the remaining tasks
        });
        li.appendChild(deleteTask);
        //Add the task to the array and local storage
        taskArr.push(`${checkbox.checked}${task}`);
        localStorage.setItem('TODO', JSON.stringify(taskArr));
        console.log("localStorage at end of addTask: " + localStorage.getItem('TODO'));
        console.log("taskArr at end of addTask: " + taskArr);
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