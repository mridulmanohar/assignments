const fs = require("fs");

// simple straightforward file i/o read
fs.readFile("../files/sampleFile1.txt", "utf-8", (err, data) => {
    console.log(data);
});

// file i/o using callback
function printFileContents(cb) {
    fs.readFile("../files/sampleFile1.txt", "utf-8", (err, data) => {
        cb(data)
    });
}

function onDone(data) {
    console.log("---printing file contents from callback---");
    console.log(data);
}

function expensiveOperation(limit) {
    let res = [];
    res[0] = 1;
    for(let i = 1; i <= limit; i++) {
        let factorial = 1;
        for(let j = 1; j <= i; j++) {
            factorial *= j;
        }
        res[i] = factorial;
    }
    console.log(res);
}

printFileContents(onDone);
//expensiveOperation(1000);