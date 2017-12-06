const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
let blocks = raw.split(" ").filter(a => a).map(Number)

const blockLabel = (blocks) => {
    return blocks.join("|")
}

const addBlock = (blocks) => {
    const label = blockLabel(blocks)
    if (blockHistory[label]) {
        console.log(Object.keys(blockHistory).length - blockHistory[label])
        return false
    }

    blockHistory[label] = Object.keys(blockHistory).length
    return true
}

const blockHistory = {}

while (addBlock(blocks)) {
    let { index, count } = blocks.reduce((mem, n, i) => {
        if (mem.count < n) {
            return { index: i, count: n }
        }
        return mem
    }, { index: -1, count: -1 })

    blocks[index] = 0

    while (count > 0) {
        index += 1
        count -= 1

        blocks[(index % blocks.length)] += 1
    }

    console.log(blocks)
}