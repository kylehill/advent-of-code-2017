const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const lines = raw.split("\n")

let highestValue = -Infinity

const isConditionValid = (condition, memory) => {
    const [checkedRegister, operation, value] = condition.split(" ")
    const current = memory[checkedRegister] || 0

    switch(operation) {
        case "==":
            return current === Number(value)
        case "!=":
            return current !== Number(value)
        case ">":
            return current > Number(value)
        case "<":
            return current < Number(value)
        case ">=":
            return current >= Number(value)
        case "<=":
            return current <= Number(value)
    }
}

const register = lines.reduce((mem, line) => {
    const [command, condition] = line.split(" if ")
    if (isConditionValid(condition, mem)) {
        const [modifiedRegister, operation, value] = command.split(" ")
        mem[modifiedRegister] = mem[modifiedRegister] || 0

        switch (operation) {
            case "inc":
                mem[modifiedRegister] += Number(value)
                highestValue = Math.max(highestValue, mem[modifiedRegister])
                break

            case "dec":
                mem[modifiedRegister] -= Number(value)
                break
        }
    }

    return mem
}, {})

console.log(highestValue)