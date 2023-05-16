const fs = require('fs');
fs.readFile("adventArray.txt", "utf8", (err, arrayInput) => {
    if (err) throw err
    const arrayData = arrayMaker(arrayInput.split("\n"))
    fs.readFile("adventMoves.txt", "utf8", (err, moveInput) => {
        if (err) throw err
        const moveData = moveReader(moveInput.split("\n"))
        moveMaker(arrayData, moveData)
        popper(arrayData)
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
    const mappedInput = input.map((line) => {
        return line.split(" ")
    })
    return mappedInput.map((line) => {
        line.splice(0, 1)
        line.splice(1, 1)
        line.splice(2, 1)
        return line
    })
}


function moveMaker(arrayData, moveData) {
    for (let i = 0; i < moveData.length; i++) {
        const count = parseInt(moveData[i][0])
        const fromStack = parseInt(moveData[i][1]) - 1
        const toStack = parseInt(moveData[i][2]) - 1
        for (let k = 0; k < count; k++) {
            const elem = arrayData[fromStack].pop()
            arrayData[toStack].push(elem)
        }
    }
}
function popper(arrayData) {
    console.log(arrayData.map(item => item.pop()))
}