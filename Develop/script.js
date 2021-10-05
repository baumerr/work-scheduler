var refreshTime = function () {
    setInterval(function () {
        var currentDate = document.querySelector("#currentDay");

        currentDate.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1000);  
};

refreshTime();