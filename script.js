let inputTask = document.querySelector("#textenter");
let taskspace = document.querySelector("#tasks");
let errorMsg = document.getElementById("error");
let count = 0;

const addtask = () => {
    errorMsg.innerHTML = "";
    if (inputTask.value == '') {
        errorMsg.innerHTML = "please Enter value";
    } else {
        let li = document.createElement('li');
        li.textContent = inputTask.value;
        let a = document.createElement('a');
        a.textContent = "Done";
        a.href = "javascript:void(0)";
        li.appendChild(a);
        taskspace.appendChild(li);
        inputTask.value = "";
        listcount();
    }
}

let btn = document.querySelector('ul');
btn.addEventListener('click', function (e) {
    let li = e.target.parentNode;
    taskspace.removeChild(li);
    listcount(count = count - 2);
})

const clearall = () => {
    taskspace.innerHTML = "";
    count = -1;
    listcount(count);
}

addEventListener("keypress", function (e) {
    if (13 === e.keyCode) {
        addtask();
    }
}
);

const listcount = () => {
    count++;
    document.getElementById("counter").innerHTML = "You Have " + count + " Pending Tasks";
}