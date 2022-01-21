var tasks = [];

var button = document.querySelector("#nine");
var nineValue = document.getElementById("0");

var button1 = document.querySelector("#ten");
var tenValue = document.getElementById("1");

var button2 = document.querySelector("#eleven");
var elevenValue = document.getElementById("2");

var button3 = document.querySelector("#twelve");
var twelveValue = document.getElementById("3");

var button4 = document.querySelector("#one");
var oneValue = document.getElementById("4");

var button5 = document.querySelector("#two");
var twoValue = document.getElementById("5");

var button6 = document.querySelector("#three");
var threeValue = document.getElementById("6");

var button7 = document.querySelector("#four");
var fourValue = document.getElementById("7");

var button8 = document.querySelector("#five");
var fiveValue = document.getElementById("8");


var refreshTime = function () {
    setInterval(function () {
        var currentDate = document.querySelector("#currentDay");

        currentDate.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1000);
};

var printLocal = function () {
    var pastTasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = pastTasks;
    console.log(tasks);
    

    for (i = 0; i < pastTasks.length; i++) {
        var holder = document.getElementById([i]);
        holder.value = tasks[i];
    }
};

var saveLocal = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    printLocal();
}


var saveTasks = function (event) {
    event.preventDefault();
    var newTasks = [];
    console.log('hey');
    // Not sure why this works but it does
    if (newTasks != tasks) {
        newTasks.push(nineValue.value); 
        newTasks.push(tenValue.value);
        newTasks.push(elevenValue.value);
        newTasks.push(twelveValue.value);
        newTasks.push(oneValue.value);
        newTasks.push(twoValue.value);
        newTasks.push(threeValue.value);
        newTasks.push(fourValue.value);
        newTasks.push(fiveValue.value);
    }
    
    tasks = newTasks;

    saveLocal();
}

function colorCode() {
    // style='background-color: lightcoral'
    var d = new Date();
    var n = d.getUTCHours() - 14;

    if (nineValue.id > n) {
        nineValue.style = 'background-color: lightgreen;';
    } else if (nineValue.id < n) {
        nineValue.style = 'background-color: lightcoral;';
    }

    if (tenValue.id > n) {
        tenValue.style = 'background-color: lightgreen;';
    } else if (nineValue.id < n) {
        tenValue.style = 'background-color: lightcoral;';
    }

    if (elevenValue.id > n) {
        elevenValue.style = 'background-color: lightgreen;';
    } else if (elevenValue.id < n) {
        elevenValue.style = 'background-color: lightcoral;';
    }

    if (twelveValue.id > n) {
        twelveValue.style = 'background-color: lightgreen;';
    } else if (twelveValue.id < n) {
        twelveValue.style = 'background-color: lightcoral;';
    }

    if (oneValue.id > n) {
        oneValue.style = 'background-color: lightgreen;';
    } else if (oneValue.id < n) {
        oneValue.style = 'background-color: lightcoral;';
    }

    if (twoValue.id > n) {
        twoValue.style = 'background-color: lightgreen;';
    } else if (twoValue.id < n) {
        twoValue.style = 'background-color: lightcoral;';
    }

    if (threeValue.id > n) {
        threeValue.style = 'background-color: lightgreen;';
    } else if (threeValue.id < n) {
        threeValue.style = 'background-color: lightcoral;';
    }

    if (fourValue.id > n) {
        fourValue.style = 'background-color: lightgreen;';
    } else if (fourValue.id < n) {
        fourValue.style = 'background-color: lightcoral;';
    }

    if (fiveValue.id > n) {
        fiveValue.style = 'background-color: lightgreen;';
    } else if (fiveValue.id < n) {
        fiveValue.style = 'background-color: lightcoral;';
    }
}

button.addEventListener("submit", saveTasks);
button1.addEventListener("submit", saveTasks);
button2.addEventListener("submit", saveTasks);
button3.addEventListener("submit", saveTasks);
button4.addEventListener("submit", saveTasks);
button5.addEventListener("submit", saveTasks);
button6.addEventListener("submit", saveTasks);
button7.addEventListener("submit", saveTasks);
button8.addEventListener("submit", saveTasks);

colorCode();

refreshTime();

printLocal();