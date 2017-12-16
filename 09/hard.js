const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")

const count = raw.split("").reduce((mem, char) => {
  switch (mem.state) {
    case "!":
      mem.state = "<"
      return mem

    case "<":
      if (char === ">") {
        mem.state = false
      }
      else {
        if (char === "!") {
          mem.state = "!"
        }
        else {
          mem.count += 1
        }
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
}, { string: "", state: false, count: 0 }).count

console.log(count)