import '../styles/index.scss';
class Todos {
    constructor() {

    }

    getTodos() {
        var todos = new Array;
        var todosStr = localStorage.getItem("todo");
        if (todosStr !== null) {
            todos = JSON.parse(todosStr);
        }
        return todos;
    }

    getCompleted() {
        var completedTodos = new Array;
        var todoStr = localStorage.getItem("completedTodo");
        if (todoStr !== null) {
            completedTodos = JSON.parse(todoStr);
        }
        return completedTodos;
    }

    add(task) {
        var todos = this.getTodos();
        var textObj = document.querySelector("#textField");

        for (var i = 0; i < todos.length; i++) {
            if (todos[i] == task) {
                $("#myModal .text").text(`${task} is already defined!`);
                $("#myModal").modal();
                textObj.value = "";
                textObj.focus();
                return;
            } // if the task is already defined in the list alert
        }
        if (task.trim().length == 0) {
            $("#myModal .text").text('Please write something first!');
            $("#myModal").modal();
            textObj.focus();
            return;
        } // if the input field is empty alert
        else {
            todos.push(task);
            localStorage.setItem("todo", JSON.stringify(todos));
            console.log('task added!');
            textObj.value = "";
            textObj.focus();
        } // push the task to todo list 
        this.show();
        return false;
    }

    show() {
        var todos = this.getTodos();
        var self = this;

        var html = '<ul>';
        for (var i = 0; i < todos.length; i++) {
            html += '<li class="col-sm-8" id="' + i + '">' + todos[i] + '</li>' + '<a href="#" class="complete-item mx-2 item-icon" id="' + i + '"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon" id="' + i + '"><i class="fas fa-pen"></i></a> <a href="#" class="delete-item item-icon" id="' + i + '"><i class="fas fa-trash-alt"></i></a>';
        }; // for every item in todo list write a list item with buttons
        html += '</ul>';

        document.getElementById('todos').innerHTML = html;

        var removeButtons = document.getElementsByClassName("delete-item"); // get all the buttons
        var editButtons = document.getElementsByClassName("edit-item");
        var completeButtons = document.getElementsByClassName('complete-item');

        for (var j = 0; j < completeButtons.length; j++) {
            completeButtons[j].addEventListener('click', function () {
                var id = this.getAttribute('id');
                self.checkCompleted(id);
            });
        } //push todo to completed list

        for (var k = 0; k < editButtons.length; k++) {
            editButtons[k].addEventListener('click', function () {
                var id = this.getAttribute('id');
                self.edit(id);
            });
        } //edit todo

        for (var i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener('click', function () {
                var id = this.getAttribute('id');
                self.removeTodo(id);
            });

        }; //remove todo
    }

    showCompleted() {
        var completedTodos = this.getCompleted();
        var self = this;

        var html = '<ul>';
        for (var i = 0; i < completedTodos.length; i++) {
            html += '<li class="col-sm-8 completed" id="' + i + '">' + completedTodos[i] + '</li>' + '<a href="#" class="active mx-2 item-icon" id="' + i + '"><i class="fas fa-check-circle"></i></a> <a href="#" class="closeItm item-icon mx-2" id="' + i + '"><i class="fas fa-trash-alt"></i></a> <a href="#" class="item-icon" id="' + i + '"><i class="far"></i></a>';
        } // for every item in the completed todos write a list item with buttons
        html += '</ul>';

        document.getElementById('completedTodo').innerHTML = html; // assign the innerHTML of html to the completedTodo div

        var removeButtons = document.getElementsByClassName("closeItm"); // get all close and active buttons
        var returnToListBtns = document.getElementsByClassName("active");

        for (var k = 0; k < returnToListBtns.length; k++) {
            returnToListBtns[k].addEventListener("click", function () {
                var id = this.getAttribute('id');
                self.returnCompletedToList(id);
            });
        } // return the selected completed todo to the main list

        for (var i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener("click", function () {
                var id = this.getAttribute(id);
                self.removeCompleted(id);
            }); // delete completed todo
        };
    }

    edit(id) {
        var text;
        var self = this;
        this.todos = this.getTodos();
        for (var i = 0; i < this.todos.length; i++) {
            if (id == i) {
                console.log(this.todos[i]);
                text = this.todos[i];
            } // if the id is the same as the clicked element save it in text
        }
        var textObj = document.querySelector("#textField");
        textObj.value = text; //returns the selected item to edit to the input field
        var editBtn = document.getElementById('edit');
        var submitBtn = document.getElementById('add');
        editBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden'); //shows/hides the edit and submit button depending on the case

        document.getElementById('textField').placeholder = 'Edit todo...';
        document.getElementById('edit').addEventListener('click', function () {
            var task = document.getElementById("textField").value;

            for (var i = 0; i < self.todos.length; i++) {
                if (self.todos[i] == task) {
                    $("#myModal .text").text(`${task} is already defined!`);
                    $("#myModal").modal();
                    textObj.focus();
                    return;
                } //if task is already defined alert
            }
            if (task.trim().length == 0) {
                $("#myModal .text").text('Please write something first!');
                $("#myModal").modal();
                textObj.focus();
            } //if input field is empty alert
            else {
                self.todos.splice(id, 1, task);
                console.log('task edited!');
                localStorage.setItem("todo", JSON.stringify(self.todos));
                textObj.value = '';
                document.getElementById('textField').placeholder = 'Add new task...';
                location.reload();
                return; 
            } // replace the old value with the new one
        });
    }

    checkCompleted(id) {
        var todos = this.getTodos();
        var completed = this.getCompleted();
        var task;
        for (var i = 0; i < todos.length; i++) {
            if (id == i) {
                task = todos[i];
            } //if the id of the clicked element is the same as the one in the list asign task with that value
        }
        completed.push(task); // push the item to the completed list
        todos.splice(id, 1); // splice the item from the todo list
        console.log('task moved to completed list!');
        localStorage.setItem("todo", JSON.stringify(todos));
        localStorage.setItem("completedTodo", JSON.stringify(completed));
        this.show();
        this.showCompleted();
    }

    returnCompletedToList(id) {
        var todos = this.getTodos();
        var completed = this.getCompleted();
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
        this.showCompleted();
        this.show();
    }

    removeTodo(id) {
        var todos = this.getTodos();
        todos.splice(id, 1);
        console.log('task removed!');
        localStorage.setItem('todo', JSON.stringify(todos));
        this.show();
        return false;
        //delete todo
    }

    removeCompleted(id) {
        var todos = this.getCompleted();
        todos.splice(id, 1);
        console.log('completed task removed!');
        localStorage.setItem("completedTodo", JSON.stringify(todos));
        this.showCompleted();
        return false;
        // delete completed todo
    }

    clearAllTodos() {
        localStorage.clear();
        location.reload();
        return;
    } // if clear all button click ask for a confirmation and clear the local storage

}

var todos = new Todos();
todos.show();
todos.showCompleted();

document.getElementById('add').addEventListener('click', function () {
    var input = document.getElementById('textField').value;
    todos.add(input);
}); // returns the input value to the add function

document.getElementById('submit').addEventListener('click', todos.clearAllTodos);