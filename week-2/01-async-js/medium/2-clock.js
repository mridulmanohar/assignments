
let currentDate;

function refreshDateTime() {
    currentDate = new Date();
    let timeStr = currentDate.toISOString().split("T");
    console.log("current time: " + timeStr[1].substring(0,8));
}

function printTime(duration) {
    setInterval(refreshDateTime, duration);
}

printTime(2000);        // prints time every 2sec