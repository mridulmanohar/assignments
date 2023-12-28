

let counter = 0;

function increment() {
    counter++;
    console.log("current counter val:" + counter);
}

function myCounter(duration) {
    setInterval(increment, duration);
}

console.log("initial counter val:" + counter);
myCounter(1000);