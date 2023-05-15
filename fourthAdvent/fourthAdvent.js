const fs = require('fs');
fs.readFile("advent.txt", "utf8", (err, data) => {
    if (err) throw err;
    let lines = data.split(",");
    const newLines = lines.map((str) => {
        return str.replace(/\r?\n|\r/g, ',');
    });
    console.log(newLines);
})
