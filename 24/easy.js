const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const components = raw.split("\n").map((c) => {
    return [Number(c.split("/")[0]), Number(c.split("/")[1])]
})

const runStep = (active, components, str) => {
    const matches = components.filter((c) => {
        return (c[0] === active || c[1] === active)
    })

    if (matches.length === 0) {
        return 0
    }

    return Math.max.apply(null, matches.map((m) => {
        const port = (m[0] === active ? m[1] : m[0])
        const filtered = components.filter((c) => {
            return m.join("/") !== c.join("/")
        })

        return active + port + runStep(port, filtered, str + "+" + active + "+" + port)
    }))
}

console.log(runStep(0, components, "0"))