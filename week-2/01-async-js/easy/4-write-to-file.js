const fs = require("fs");

// simple straightforward file i/o using fs
/*
fs.appendFile("../files/sampleFile1.txt", "\nthis is a new line appended!!", (err, data) => {
    if(err) throw err;
    console.log("file updated!");
});
*/

fs.readFile("../files/sampleFile1.txt", "utf-8", (err, data) => {
    console.log(data);
});


// file i/o using callback
function printFileContents(cb) {
    fs.readFile("../files/sampleFile1.txt", "utf-8", (err, data) => {
        cb(data)
    });
}

function writeToFile(cb_err) {
    fs.appendFile("../files/sampleFile1.txt", "\nthis is a new line appended with callback!!", (err) => {
        if(err) {
            cb_err(err);
        }
        console.log("file updated!!");
    });
}

function onDone(data) {
    console.log("---printing file contents from callback---");
    console.log(data);
}

function onError(err) {
    console.log("---some error during write file from callback---");
    throw err;
}

writeToFile(onError);