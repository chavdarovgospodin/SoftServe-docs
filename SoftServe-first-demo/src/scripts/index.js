import '../styles/index.scss';

function editTodos() {
    var id = this.getAttribute('id');
    var text;
    var todos = getTodos();
    for (var i = 0; i < todos.length; i++) {
        if (id == i) {
            console.log(todos[i]);
            text = todos[i];
        }
    }
    var textObj = document.querySelector("#textField");
    textObj.value = text;
    var editBtn = document.getElementById('edit');
    var submitBtn = document.getElementById('add');
    editBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');

    document.getElementById('textField').placeholder = 'Edit todo...';

    document.getElementById('edit').addEventListener('click', function () {
        console.log('in');
        var task = document.getElementById("textField").value;

        for (var i = 0; i < todos.length; i++) {
            if (todos[i] == task) {
                alert(task + " is already defined");
                textObj.focus();
                return;
            }
        }
        if (task.trim().length == 0) {
            alert('Please write something first!');
            textObj.focus();
        } else {
            todos.splice(id, 1, task);
            console.log(id);
            localStorage.setItem("todo", JSON.stringify(todos));
            textObj.value = '';
            document.getElementById('textField').placeholder = 'Add new task...';
            location.reload();
        }
    });
}

function checkCompleted() {
    var todos = getTodos();
    var completed = getCompleted();
    var task;
    var list = document.querySelectorAll('complete-item');
    var id = this.getAttribute('id');
    console.log(id);
    console.log(list);
    var input = document.querySelector("#textField");
    var todos = getTodos();
    for (var i = 0; i < todos.length; i++) {
        if (id == i) {
            console.log(todos[i]);
            task = todos[i];
        }
    }
    console.log(task);
    completed.push(task);
    todos.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    localStorage.setItem("completedTodo", JSON.stringify(completed));
    console.log(todos, completed);
     showCompleted();
     show();
    // TODO --- PUSH ELEMENTS IN COMPLETED LIST AND DELETE ELEMENTS FROM TODO LIST              
}

function addClasses() {
    // var listItems = document.querySelectorAll("ul li");
    // var list = document.querySelector("ul");
    // for (var i = 0; i < listItems.length; i++) {
    //     listItems[i].classList.add("list-group-item");
    // }
    // list.addEventListener("click", function (item) {
    //     if (item.target.tagName === "LI") {
    //         item.target.classList.toggle("checked");
    //     }
    // });
}

function getTodos() {
    var todos = new Array;
    var todosStr = localStorage.getItem("todo");
    if (todosStr !== null) {
        todos = JSON.parse(todosStr);
    }
    return todos;
}

function getCompleted() {
    var completedTodos = new Array;
    var todosStr = localStorage.getItem("completedTodo");
    if (todosStr !== null) {
        completedTodos = JSON.parse(todosStr);
    }
    return completedTodos;
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
        }
    }
    if (task.trim().length == 0) {
        alert("Please enter something");
        textObj.focus();
    } else {
        todos.push(task);
        localStorage.setItem("todo", JSON.stringify(todos));
        textObj.value = "";
        textObj.focus();
    }
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
}

function removeCompleted() {
    var id = this.getAttribute("id");
    var todos = getCompleted();
    todos.splice(id, 1);
    localStorage.setItem("completedTodo", JSON.stringify(todos));
    showCompleted();
    return false;
}

function addCompleted() {
    var todos = getTodos();
    var completed = getCompleted();
    var list = document.querySelector("ul");
    console.log(list);
    list.addEventListener("click", function (item) {
        if (item.target.tagName === "LI") {
            completed.push(item.target.innerHTML);
            todos.splice(item, 1);
            console.log(item);
            localStorage.setItem("completedTodo", JSON.stringify(completed));
            showCompleted();
            show();
        }
        //if the same elem dont push to completed list
    });
}

function showCompleted() {
    var completedTodos = getCompleted();
    // console.log(completedTodos);
    var html = '<ul>';
    for (var i = 0; i < completedTodos.length; i++) {
        html += '<li class="col-sm-8 completed" id="' + i + '">' + completedTodos[i] +  '</li>' + '</a> <a href="#" class="close item-icon" id="' + i + '"><i class="far fa-times-circle"></i></a>';
    }
    html += '</ul>';

    document.getElementById('completedTodo').innerHTML = html;

    var buttons = document.getElementsByClassName("close");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", removeCompleted);
    };

    completedTodos.forEach(function(item){
        item.classList.add('completed');
    });

    // completedTodos.forEach(function(item){
    //     item.classList.toggle('complete');
    // });
    addClasses();
}

function show() {
    var todos = getTodos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {

        html += '<li class="col-sm-8" id="' + i + '">' + todos[i] + '</li>' + '<a href="#" class="complete-item mx-2 item-icon" id="' + i + '"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon" id="' + i + '"><i class="far fa-edit"></i></a> <a href="#" class="delete-item item-icon" id="' + i + '"><i class="far fa-times-circle"></i></a>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName("delete-item");
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
    };
    addClasses();
}

function clearAllTodos() {
    if (confirm('Are you sure?')) {
        localStorage.clear();
        show();
        showCompleted();
    }
}

document.getElementById('add').addEventListener('click', add);
document.getElementById('clear').addEventListener('click', clearAllTodos);

show();
showCompleted();

//addCompleted();