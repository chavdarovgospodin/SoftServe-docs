import '../styles/index.scss';

// function contactValues() {
//     var contactObj = document.querySelector("#mySelect");

//     var contacts = [{
//             name: "Andy",
//             Adress: "25 street",
//             phone: "111-222-333"
//         },
//         {
//             name: "Carol",
//             Adress: "11 elm street",
//             phone: "611-221-494"
//         },
//         {
//             name: "Bob",
//             Adress: "26 nathaniel clyne street",
//             phone: "661-167-889"
//         },
//     ];

//     for (var i = 0; i < contacts.length; i++) {
//         var x = document.createElement("li");
//         x.innerHTML = contacts[i].name + contacts[i].Adress + contacts[i].phone;
//         x.value = i;
//         contactObj.appendChild(x);

//     }
// }

// function addCloseBtn() {
//     var list = document.getElementsByTagName("LI");
//     for (var i = 0; i < list.length; i++) {
//         if (true) {
//             var span = document.createElement("SPAN");
//             var closeIcon = document.createTextNode("\u00D7");
//             span.className = "close";
//             span.appendChild(closeIcon);
//             list[i].appendChild(span);
//         }

//     }


// }


// function addClose() {
//     var list = document.getElementsByTagName("LI");
//     var close = document.querySelectorAll(".close");
//     console.log(close);
//     for (var i = 0; i < list.length; i++) {
//         if (!list[i].classList.contains("close")) {
//             var span = document.createElement("SPAN");
//             var closeIcon = document.createTextNode("\u00D7");
//             span.className = "close";
//             span.appendChild(closeIcon);
//             list[i].appendChild(span);
//         }

//     }
// }

// function deleteTodo() {
//     var close = document.getElementsByClassName("close");

//     for (var i = 0; i < close.length; i++) {
//         // close[i].addEventListener("click",function(){
//         //     var div = this.parentElement;
//         //     Console.log(div);
//         //     div.style.display = "none";
//         // });
//         close[i].onClick = function () {
//             var div = this.parentElement;
//             console.log(div);
//             div.style.display = "none";
//         };
//     }
//     console.log(close);
// }


// function addTodos() {
//     var textObj = document.querySelector("#textField");
//     var addObj = document.querySelector("#add");

//     addObj.addEventListener("click", function () {
//         var todoListItemsObj = document.querySelectorAll("#mySelect li");
//         for (var i = 0; i < todoListItemsObj.length; i++) {
//             if (todoListItemsObj[i].innerHTML.trim() == textObj.value.trim()) {
//                 alert(textObj.value + " is already defined");
//                 textObj.value = "";
//                 textObj.focus();
//                 return;
//             } // alert an error if the value is already defined in the list
//         }
//         var click = event.detail;
//         if (textObj.value.trim().length == 0) {
//             alert("Please type a different value!");
//             textObj.value = "";
//             textObj.focus();

//         } else {
//             var valueObj = document.querySelector("#mySelect");
//             var x = document.createElement("li");
//             x.innerHTML = textObj.value;
//             x.value = textObj.value;
//             valueObj.appendChild(x);
//             textObj.value = "";
//             textObj.focus();

//         }



//     });
// }

// function addClasses() {
//     var listItems = document.querySelectorAll("ul li");
//     var list = document.querySelector("ul");
//     for (var i = 0; i < listItems.length; i++) {
//         listItems[i].classList.add("list-group-item");
//     }
//     list.addEventListener("click", function (item) {
//         if (item.target.tagName === "LI") {
//             item.target.classList.toggle("checked");
//         }
//     });
// }

// function getTodos() {
//     var todos = new Array;
//     var todosStr = localStorage.getItem("todo");
//     if (todosStr !== null) {
//         todos = JSON.parse(todosStr);
//     }
//     return todos;
// }

// function add() {
//     var task = document.getElementById("textField").value;
//     var textObj = document.querySelector("#textField");
//     var todos = getTodos();
//     for (var i = 0; i < todos.length; i++) {
//         if (todos[i] == task) {
//             alert(task + " is already defined");
//             textObj.value = "";
//             textObj.focus();
//             return;
//         }
//     }

//     if (task.trim().length == 0) {
//         alert("Please enter something");
//         textObj.focus();
//     } else {
//         todos.push(task);
//         localStorage.setItem("todo", JSON.stringify(todos));
//         textObj.value="";
//         textObj.focus();
//     }

//     show();

//     return false;
// }

// function remove() {
//     var id = this.getAttribute("id");
//     var todos = getTodos();
//     todos.splice(id, 1);
//     localStorage.setItem("todo", JSON.stringify(todos));

//     show();

//     return false;
// }

// function show() {
//     var todos = getTodos();
//     var html = '<ul>';
//     for (var i = 0; i < todos.length; i++) {
//         html += '<li>' + todos[i] + '<span class="close" id="' + i + '">\u00D7</span></li>';
//     };
//     html += '</ul>';

//     document.getElementById('todos').innerHTML = html;

//     var buttons = document.getElementsByClassName("close");
//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener("click", remove);
//     };
//     addClasses();
//     onClick();
// }

// function onClick() {
//     var todos = document.querySelectorAll("li");
//     // todos.addEventListener("click",function(){
//     //     foreach((todo)=>{
//     //         console.log(todo);
//     //     });
//     // });
//     console.log(todos);
// }



// document.getElementById('add').addEventListener('click', add);
// show();


// window.addEventListener("load", function () {
//     addClasses();
//     getTodos();
//     add();
//     remove();
//     // contactValues();
//     // addTodos();
//     // addCloseBtn();
//     // deleteTodo();


// });



function addClasses() {
    var listItems = document.querySelectorAll("ul li");
    var list = document.querySelector("ul");
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.add("list-group-item");
    }
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
        textObj.value="";
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

function addCompleted () {
  var todos = getTodos();
  var completed = getCompleted();
  var list = document.querySelector("ul");
    console.log(list);
    list.addEventListener("click", function (item){
             if (item.target.tagName === "LI") {
            item.target.classList.toggle("checked");
            completed.push(item.target.innerHTML);
        todos.pop(item.target.innerHTML);
        console.log(todos);
        localStorage.setItem("completedTodo", JSON.stringify(completed));
        showCompleted ();
        }
        

        //if the same elem dont push to completed list

       
    });



}

function showCompleted () {
  var completedTodos = getCompleted();
  console.log(completedTodos);
  var html = '<ul>';
    for (var i = 0; i<completedTodos.length; i++) {
      html += '<li>' + completedTodos[i];
    }
    html +=  '</ul>';

    document.getElementById('completedTodo').innerHTML = html;

    var buttons = document.getElementsByClassName("close");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", removeCompleted);
    };
    addClasses();

}

function show() {
    var todos = getTodos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<span class="close" id="' + i + '">\u00D7</span></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName("close");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", remove);
    };
    addClasses();
    
   
    
}



document.getElementById('add').addEventListener('click', add);
show();
showCompleted();
