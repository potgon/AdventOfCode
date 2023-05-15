const fs = require('fs');
fs.readFile('advent.txt', 'utf8', (err, data) => {
    if (err) throw err;
    let localArr = [];
    let i = 0;
    const lines = data.split('\n');
    for(let j = 0; j < lines.length; j++){
        if(lines[j].trim().length === 0){
            localArr.push(i);
            i = 0;
            continue;
        }
        i += parseInt(lines[j]);
    }
    let totalCals = localArr.sort()[localArr.length - 1] + localArr.sort()[localArr.length - 2] + localArr.sort()[localArr.length - 3];
    console.log(totalCals);
});