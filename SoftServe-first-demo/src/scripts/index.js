import '../styles/index.scss';

class Todos  {
    let todos = []
    constructor(task){

    }

    add(task){
        
    }
    
    add(task){

    }
}

let todo = new Todos()
todo.add()
class CompletedTodos {

}

function editTodos() {
    var id = this.getAttribute('id');
    var text;
    var todos = getTodos();
    for (var i = 0; i < todos.length; i++) {
        if (id == i) {
            console.log(todos[i]);
            text = todos[i];
        }// if the id is the same as the clicked element save it in text
    }
    var textObj = document.querySelector("#textField");
    textObj.value = text; //returns the selected item to edit to the input field
    var editBtn = document.getElementById('edit');
    var submitBtn = document.getElementById('add');
    editBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');//shows/hides the edit and submit button depending on the case

    document.getElementById('textField').placeholder = 'Edit todo...';

    document.getElementById('edit').addEventListener('click', function () {
        console.log('in');
        var task = document.getElementById("textField").value;

        for (var i = 0; i < todos.length; i++) {
            if (todos[i] == task) {
                alert(task + " is already defined");
                textObj.focus();
                return;
            }//if task is already defined alert
        }
        if (task.trim().length == 0) {
            alert('Please write something first!');
            textObj.focus();
        } //if input field is empty alert
        else {
            todos.splice(id, 1, task);
            console.log(id);
            localStorage.setItem("todo", JSON.stringify(todos));
            textObj.value = '';
            document.getElementById('textField').placeholder = 'Add new task...';
            location.reload();
        } // replace the old value with the new one
    });
}

function returnCompletedToList() {
    var todos = getTodos();
    var completed = getCompleted();
    var id = this.getAttribute('id');
    var task;
    for (var i = 0; i < completed.length; i++) {
        if (id == i) {
            task = completed[i];
        } //if the id of the clicked element is the same as the one in the list asign task with that value
    }
    todos.push(task); // push the clicked item from the completed list back to the todo list
    completed.splice(id, 1); // splice the clicked element from the completed list
    localStorage.setItem("completedTodo", JSON.stringify(completed));
    localStorage.setItem("todo", JSON.stringify(todos));
    showCompleted();
    show();
}

function checkCompleted() {
    var todos = getTodos();
    var completed = getCompleted();
    var task;
    var id = this.getAttribute('id');
    for (var i = 0; i < todos.length; i++) {
        if (id == i) {
            task = todos[i];
        } //if the id of the clicked element is the same as the one in the list asign task with that value
    }
    completed.push(task); // push the item to the completed list
    todos.splice(id, 1); // splice the item from the todo list
    localStorage.setItem("todo", JSON.stringify(todos));
    localStorage.setItem("completedTodo", JSON.stringify(completed));
    show();
    showCompleted();
}

function getTodos() {
    var todos = new Array;
    var todosStr = localStorage.getItem("todo");
    if (todosStr !== null) {
        todos = JSON.parse(todosStr);
    }
    return todos;
    // returns the todo list array
} 

function getCompleted() {
    var completedTodos = new Array;
    var todosStr = localStorage.getItem("completedTodo");
    if (todosStr !== null) {
        completedTodos = JSON.parse(todosStr);
    }
    return completedTodos;
    //returns the completed todo list
}

function add() {
    var task = document.getElementById("textField").value;
    var textObj = document.querySelector("#textField");
    var todos = getTodos();
    for (var i = 0; i < todos.length; i++) {
        if (todos[i] == task) {
            alert(task + " is already defined");
            textObj.value = "";
            textObj.focus();
            return;
        } // if the task is already defined in the list alert
    }
    if (task.trim().length == 0) {
        alert("Please enter something");
        textObj.focus();
    } // if the input field is empty alert
    else {
        todos.push(task);
        localStorage.setItem("todo", JSON.stringify(todos));
        textObj.value = "";
        textObj.focus();
    } // push the task to todo list 
    show();
    return false;
}

function remove() {
    var id = this.getAttribute("id");
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    show();
    return false;
    // splice the selected item's id
}

function removeCompleted() {
    var id = this.getAttribute("id");
    var todos = getCompleted();
    todos.splice(id, 1);
    localStorage.setItem("completedTodo", JSON.stringify(todos));
    showCompleted();
    return false;
    // splice the selected item's id
}

function showCompleted() {
    var completedTodos = getCompleted();
    var html = '<ul>';
    for (var i = 0; i < completedTodos.length; i++) {
        html += '<li class="col-sm-8 completed" id="' + i + '">' + completedTodos[i] + '</li>' + '<a href="#" class="active mx-2 item-icon" id="' + i + '"><i class="fas fa-check-circle"></i></a> <a href="#" class="closeItm item-icon mx-2" id="' + i + '"><i class="fas fa-trash-alt"></i></a> <a href="#" class="item-icon" id="' + i + '"><i class="far"></i></a>';
    } // for every item in the completed todos write a list item with buttons
    html += '</ul>';

    document.getElementById('completedTodo').innerHTML = html; // assign the innerHTML of html to the completedTodo div

    var closeButtons = document.getElementsByClassName("closeItm"); // get all close and active buttons
    var returnToListBtn = document.getElementsByClassName("active"); 

    for (var k = 0; k < closeButtons.length; k++) {
        returnToListBtn[k].addEventListener("click", returnCompletedToList);
    } // add event listeners to all buttons and call the functions on click

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", removeCompleted);
    };
}

function show() {
    var todos = getTodos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li class="col-sm-8" id="' + i + '">' + todos[i] + '</li>' + '<a href="#" class="complete-item mx-2 item-icon" id="' + i + '"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon" id="' + i + '"><i class="fas fa-pen"></i></a> <a href="#" class="delete-item item-icon" id="' + i + '"><i class="fas fa-trash-alt"></i></a>';
    }; // for every item in todo list write a list item with buttons
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName("delete-item"); // get all the buttons
    var editButton = document.getElementsByClassName("edit-item");
    var completeBtn = document.getElementsByClassName('complete-item');

    for (var j = 0; j < completeBtn.length; j++) {
        completeBtn[j].addEventListener('click', checkCompleted);
    }

    for (var k = 0; k < editButton.length; k++) {
        editButton[k].addEventListener('click', editTodos);
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }; //for every button add event listener on click to call the function to delete/edit and push to the other list
}

function clearAllTodos() {
    if (confirm('Are you sure?')) {
        localStorage.clear();
        show();
        showCompleted();
    } // if clear all button click ask for a confirmation and clear the local storage
}

document.getElementById('add').addEventListener('click', add); // add event listener on the add button next to the input form
document.getElementById('clear').addEventListener('click', clearAllTodos); // add event listener on the clear button which clears the local storage

show();
showCompleted();