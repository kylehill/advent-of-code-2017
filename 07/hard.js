const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const lines = raw.split("\n")

const weights = lines.reduce((mem, line) => {
    const name = line.split(" ")[0]
    const weight = Number(line.split(")")[0].split("(")[1])
    mem[name] = weight
    return mem
}, {})

const relations = lines.reduce((mem, line) => {
    if (line.indexOf(" -> ") > -1) {
        const name = line.split(" ")[0]
        const branches = line.split(" -> ")[1].split(", ")
        mem[name] = branches
    }

    return mem
}, {})

const calculateTotalWeight = (name) => {
    if (relations[name]) {
        return weights[name] + relations[name].reduce((mem, branch) => {
            return mem + calculateTotalWeight(branch)
        }, 0)
    }

    return weights[name]
}

const rootNode = "tlskukk"
console.log(rootNode, weights[rootNode])
relations[rootNode].forEach((node) => {
    console.log(node, calculateTotalWeight(node))
})