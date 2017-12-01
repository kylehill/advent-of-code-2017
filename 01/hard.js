const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const data = raw.split("")

let val = data.reduce((mem, char, i) => {
    const reflectIndex = (i + data.length / 2) % data.length
    if (char === data[reflectIndex]) {
        mem = mem + (char * 1)
    }
    
    return mem
}, 0)

console.log(val)