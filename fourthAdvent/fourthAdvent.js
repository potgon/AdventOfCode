const fs = require('fs');
fs.readFile("advent.txt", "utf8", (err, data) => {
    if (err) throw err;
    let totalPairs = 0;
    let lines = data.split("\n");
    lines = lines.map(lines => lines.split(","));
    for (const pairs of lines) {
        let pair1Start = +pairs[0].split("-")[0];
        let pair1End = +pairs[0].split("-")[1];
        let pair2Start = +pairs[1].split("-")[0];
        let pair2End = +pairs[1].split("-")[1];
        if (pair1Start < pair2Start && pair1End < pair2Start){
            console.log("No overlap");
        } else if (pair2Start < pair1Start && pair2End < pair1Start){
            console.log("No overlap");
        } else {
            totalPairs++;
        }
    }
    console.log(totalPairs);
});