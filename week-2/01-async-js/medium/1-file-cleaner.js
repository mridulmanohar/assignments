const fs = require("fs");

function writeToFile(data) {
    fs.writeFile("../files/sampleFile2.txt", data, (err) => {
            if(err) {
                throw err;
            }
            console.log("file updated!!");
    });
}

function formatFile(cb) {
    fs.readFile("../files/sampleFile2.txt", "utf-8", (err, data) => {
        let text = data.replace(/[\s]+/g, ' ');
        console.log("formatted file contents: "+ text);
        cb(text);
    });
}

formatFile(writeToFile);

fs.readFile("../files/sampleFile2.txt", "utf-8", (err, data) => {
    console.log("reading file contents: "+data);
});