const fs = require('fs');
fs.readFile("adventArray.txt", "utf8", (err, arrayInput) => {
    if (err) throw err
    const arrayData = arrayMaker(arrayInput.split("\n"))
    fs.readFile("adventMoves.txt", "utf8", (err, moveInput) => {
        if (err) throw err
        const moveData = moveReader(moveInput.split("\n"))
        console.log(moveData)
    })
})

function arrayMaker(input) {
    const localArr = []
    for (let k = 1; k <= 33; k += 4) {
        const localSubArr = []
        for (let i = 7; i >= 0; i--) {
            if (input[i][k] && input[i][k] !== " ") {
                localSubArr.push(input[i][k])
            }
        }
        localArr.push(localSubArr)
    }
    return localArr
}

function moveReader(input) {
    const mappedInput = input.map((line) => {  return line.split(" ") })
    return mappedInput.map((line) => {
        line.splice(0, 1)
        line.splice(1, 1)
        line.splice(2, 1)
    })
}


function moveMaker(input) {

}