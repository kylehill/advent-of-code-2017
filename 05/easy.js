const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const inst = raw.split("\n").map(a => a * 1)

let p = 0, ctr = 0
while(p >= 0 && p < inst.length) {
  let move = inst[p]
  if (move >= 3) {
    inst[p] -= 1
  }
  else {
    inst[p] += 1
  }
  p += move

  ctr += 1

  //console.log(p, ctr, inst[p])
}

console.log(ctr)