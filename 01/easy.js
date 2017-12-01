const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const data = raw.split("")

let val = data.reduce((mem, char, i) => {
    if (char === data[i+1]) {
        mem = mem + (char * 1)
    }

    return mem
}, 0)

if (data[0] === data[data.length - 1]) {
    val += (data[0] * 1)
}

console.log(val)