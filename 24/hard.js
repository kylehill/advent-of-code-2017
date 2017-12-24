const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
//const raw = fs.readFileSync("test.txt", "utf8")
const components = raw.split("\n").map((c) => {
    return [Number(c.split("/")[0]), Number(c.split("/")[1])]
})

const chains = []

const runStep = (active, components, length, strength) => {
    const matches = components.filter((c) => {
        return (c[0] === active || c[1] === active)
    })

    if (matches.length === 0) {
        chains.push({ length, strength })
    }
    else {
        matches.forEach((m) => {
            const port = (m[0] === active ? m[1] : m[0])
            const filtered = components.filter((c) => {
                return m.join("/") !== c.join("/")
            })

            runStep(port, filtered, length + 1, strength + active + port)
        })
    }
}

runStep(0, components, 0, 0)

console.log(chains.reduce((mem, c) => {
    if (mem.length > c.length) {
        return mem
    }

    if (mem.length === c.length && mem.strength > c.strength) {
        return mem
    }

    return c
}, { length: 0, strength: 0 }))
