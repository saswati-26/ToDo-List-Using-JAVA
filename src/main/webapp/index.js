const data = new Date();

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.getElementById("date").innerHTML = today.toDateString();

function time() {
    const data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    if(h < 10)
        h = "0" +h;
    if(m < 10)
        m = "0" + m;
    if(s < 10)
        s = "0" + s;

    document.getElementById("hour").innerHTML = h +":"+ m + ":" + s;
    setTimeout('time()', 500);
}

todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputValue = todoInput.value;    
        if(inputValue)
            saveTodo(inputValue);
})
const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    

    //add stopwatch
    var timee = 0;
    var running = 0;
    var resetTimer = false;
    var timerSpan = document.createElement("span");
    timerSpan.setAttribute("id", "stopWatchDisplay");
    timerSpan.classList.add("timerDisplay");
    timerSpan.innerHTML = "00:00:00";
    todo.appendChild(timerSpan);
    var startBtn = document.createElement("button");
    startBtn.innerHTML = "<span><i class='fa fa-play-circle'></i></span>";
    startBtn.setAttribute("id", "startBtn");
    todo.appendChild(startBtn);
    startBtn.addEventListener("click", startTimer);
    //delete a task by setting display:none

    //add pause button
    var pauseBtn = document.createElement("button");
    //delBtn.appendChild(document.createTextNode("X"));
    pauseBtn.innerHTML = "<span><i class='fa fa-pause-circle'></i></span>";
    pauseBtn.setAttribute("id", "pauseBtn");

    todo.appendChild(pauseBtn);
    pauseBtn.addEventListener("click", pauseTimer);
    //delete a task by setting display:none

    

    function pauseTimer() {
        todo.classList.add("paused");
        todo.classList.remove("started");
        todo.classList.remove("done");
        running = 0;
        startBtn.enabled = true;
        pauseBtn.enabled = false;
        //console.log("pause:" + resetTimer);
    }
    function startTimer() {
        //console.log("start enter:" + resetTimer);
        //The classList property is not supported in Internet Explorer 9 and earlier versions.
        //li.classList.toggle("started");
        if (resetTimer) {
            reset();
        }

        if (running == 0) {
            running = 1;
            increment(timerSpan);
            startBtn.enabled = false;
            pauseBtn.enabled = true;
        }

        todo.classList.add("started");
        todo.classList.remove("paused");
        todo.classList.remove("done");
        // console.log("start exit:" + resetTimer);
    }

    function stopTimer() {
        todo.classList.add("done");
        todo.classList.remove("paused");
        todo.classList.remove("started");
        running = 0;
        startBtn.enabled = true;
        pauseBtn.enabled = false;
        stopBtn.enabled = false;
        resetTimer = true;
        // console.log("stop:" + resetTimer);
    }
    function reset() {
        running = 0;
        timee = 0;
        resetTimer = false;
        timerSpan.innerHTML = "00:00:00";
    }
    function increment() {
        if (running == 1) {
        setTimeout(function() {
            timee++;
            var mins = Math.floor(timee / 10 / 60) % 60;
            var secs = Math.floor(timee / 10) % 60;
            var tenths = timee % 10;

            if (mins < 10) {
            mins = "0" + mins;
            }
            if (secs < 10) {
            secs = "0" + secs;
            }

            timerSpan.innerHTML = mins + ":" + secs + ":" + "0" + tenths;
            increment();
        }, 100);
        }
    }

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);
    const editBtn = document.createElement("button"); 
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-todo");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'; 
    todo.appendChild(removeBtn);

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();
}

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3"))
        todoTitle = parentEl.querySelector("h3").innerText;
    
    if(targetEl.classList.contains("finish-todo"))
        parentEl.classList.toggle("done");
    
    if(targetEl.classList.contains("remove-todo"))
        parentEl.remove();

    if(targetEl.classList.contains("edit-todo")){
        toggleForms();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }

})

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;
    if(editInputValue)
        updateTodo(editInputValue) //Update value function

    toggleForms();
})

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue)
            todoTitle.innerText = text;
    })
}

/**
 * 
 */