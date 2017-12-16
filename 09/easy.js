const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")

const cleaned = raw.split("").reduce((mem, char) => {
  switch (mem.state) {
    case "!":
      mem.state = "<"
      return mem

    case "<":
      if (char === ">") {
        mem.state = false
      }

      if (char === "!") {
        mem.state = "!"
      }
      return mem

    case false:
      if (char === "{" || char === "}") {
        mem.string += char
      }
      if (char === "<") {
        mem.state = "<"
      }
      return mem
  }
}, { string: "", state: false }).string

const score = cleaned.split("").reduce((mem, char) => {
  if (char === "{") {
    mem.level += 1
    mem.l++
  }
  else {
    mem.score += mem.level
    mem.level -= 1
    mem.r++
  }

  return mem
}, { score: 0, level: 0, l: 0, r: 0 })

console.log(score)