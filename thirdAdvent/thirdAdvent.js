const fs = require('fs');
fs.readFile("advent.txt", "utf8", (err, data) => {
    if (err) throw err;
    let totalPriority = 0;
    const lines = data.split("\n");
    for (let i = 0; i < lines.length; i += 3) {
        let localString1 = lines[i];
        let localString2 = lines[i + 1];
        let localString3 = lines[i + 2];
        totalPriority += firstMatch(localString1, localString2, localString3);
    }
    console.log(totalPriority);
});

function firstMatch(localString1, localString2, localString3) {
    for (let j = 0; j < localString1.length; j++) {
        for (let k = 0; k < localString2.length; k++) {
            if(localString1[j] === localString2[k]){
                for(let l = 0; l < localString3.length; l++) {
                    if(localString2[k] === localString3[l]){
                        return charPriority(localString3[l]);
                    }
                }
            }
        }
    }
    return 0;
}

function charPriority(char1) {
    let option;
    if (char1.charCodeAt(0) > 90) {
        option = "lower"
    } else option = "upper";
    switch (option) {
        case "lower":
            return char1.charCodeAt(0) - 96;
        case "upper":
            return char1.charCodeAt(0) - 38
    }
}
