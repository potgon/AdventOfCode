const fs = require('fs');
fs.readFile("adventArray.txt", "utf8", (err, data) => {
    if (err) throw err;
    const lines = data.split("\n");
})

fs.readFile("adventMoves.txt", "utf8", (err, data) => {
    if (err) throw err;
    const lines = data.split("\n");
    lines.forEach((line) => {
        line = line.split(" ");
        console.log(line);
    })
})

function arrayMaker(input) {
    const localArr = [];
     for (let k = 1; k <= 33; k += 4) {
         const localSubArr = [];
         for (let i = 7; i >= 0; i--) {
            if (input[i][k] && input[i][k] !== " ") {
                localSubArr.push(input[i][k]);
            }
        }
        localArr.push(localSubArr);
    }
    return localArr;
}

/*function moveReader(input){
    let trimmedInput = input.split(" ");
    return trimmedInput
}*/