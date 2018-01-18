function clock() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    let currentTimeString = `${currentHours}:${currentMinutes}:${currentSeconds}`;
    return currentTimeString;
}

function display(item) {
    var location = document.getElementById("clock");
    location.innerHTML = item;
}

setInterval(function () { return display(clock()); }, 1000);

