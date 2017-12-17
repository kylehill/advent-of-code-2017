const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const moves = raw.split(",")

const before = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]

const after = moves.reduce((mem, move) => {
    switch(move[0]) {
        case "s":
            const spaces = Number(move.substr(1))
            return mem.slice(mem.length - spaces).concat(mem.slice(0, mem.length - spaces))

        case "x":
            const left = Number(move.substr(1).split("/")[0])
            const right = Number(move.substr(1).split("/")[1])
            const tmp = mem[left]
            mem[left] = mem[right]
            mem[right] = tmp
            return mem

        case "p":
            const l = move[1]
            const r = move[3]
            return mem.map((char) => {
                if (char === l) {
                    return r
                }

                if (char === r) {
                    return l
                }

                return char
            })

    }
}, before)

console.log(after.join(""))