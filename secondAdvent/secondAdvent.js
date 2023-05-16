const fs = require('fs');
fs.readFile("adventArray.txt", "utf8", (err, data) => {
    if (err) throw err;
    const lines = data.split("\n");
    let totalScore = 0;
    for(let i = 0; i < lines.length; i++){
        switch(lines[i][0]){
            case "A":
                switch (lines[i][2]){
                    case "X":
                        totalScore += 3;
                        break;
                    case "Y":
                        totalScore += 4;
                        break;
                    case "Z":
                        totalScore += 8;
                }
                break;
            case "B":
                switch (lines[i][2]){
                    case "X":
                        totalScore += 1;
                        break;
                    case "Y":
                        totalScore += 5;
                        break;
                    case "Z":
                        totalScore += 9;
                }
                break;
            case "C":
                switch (lines[i][2]){
                    case "X":
                        totalScore += 2;
                        break;
                    case "Y":
                        totalScore += 6;
                        break;
                    case "Z":
                        totalScore += 7;
                }
        }
    }
   console.log(totalScore);
});