const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const lines = raw.split("\n")
const cells = lines.map((line) => {
  return line.split(" ").filter(a => a).map(cell => cell * 1)
})

const val = cells.reduce((mem, row) => {
  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < row.length; j++) {
      if (i !== j) {
        if (row[i] % row[j] === 0) {
          return mem + (row[i] / row[j])
        }
      }
    }
  }
}, 0)

console.log(val)
