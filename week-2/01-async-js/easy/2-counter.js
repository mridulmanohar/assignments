

let counter = 0;

function myCounter(duration) {
   setTimeout(() => {
              counter++;
              console.log("current counter val:" + counter);
   }, duration);
}

console.log("initial counter val:" + counter);
myCounter(1000);