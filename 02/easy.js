const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const lines = raw.split("\n")
const cells = lines.map((line) => {
  return line.split(" ").filter(a => a).map(cell => cell * 1)
})

const val = cells.reduce((mem, row) => {
  const min = row.reduce((mem, cell) => {
    return Math.min(mem, cell)
  }, row[0])
  const max = row.reduce((mem, cell) => {
    return Math.max(mem, cell)
  }, row[0])

  return mem + (max - min)
}, 0)

console.log(val)
