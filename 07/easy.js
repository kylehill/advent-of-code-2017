const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const lines = raw.split("\n")

const nodes = lines.reduce((mem, line) => {
    const name = line.split(" ")[0]
    if (mem[name] === undefined) {
        mem[name] = false
    }

    const branches = line.split(" -> ")[1]

    if (branches) {
        mem = branches.split(", ").reduce((mem, branch) => {
            mem[branch] = name
            return mem
        }, mem)
    }

    return mem
}, {})

console.log(nodes)