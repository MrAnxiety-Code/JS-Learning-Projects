var ulist = document.getElementById("savedLists");
var newListUI = document.getElementById("newListUI");

function loadList(){
    let listItem = document.createElement("button");
    listItem.innerHTML = "There's nothing here yet!";
    let listItem2 = document.createElement("button");
    listItem2.innerHTML = "There's nothing here either!";
    let linebreak = document.createElement("br");
    ulist.appendChild(listItem);
    ulist.appendChild(linebreak);
    ulist.appendChild(listItem2);
}

function nameList(){
    let nameText = document.createElement("input");
    nameText.type = "text";
    nameText.id = "listName";
    newListUI.appendChild(nameText);
    let createButton = document.createElement("button");
    createButton.innerHTML = "Create List";
    newListUI.appendChild(createButton);
    createButton.onclick = createList(nameText.value);
}

function createList(name){}