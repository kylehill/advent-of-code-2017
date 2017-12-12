const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")

const pos = raw.split(",").reduce((mem, dir) => {
  switch(dir) {
    case "n":
      mem.y += 1
      break

    case "s":
      mem.y -= 1
      break

    case "ne":
      mem.y += 0.5
      mem.x += 0.5
      break

    case "se":
      mem.y -= 0.5
      mem.x += 0.5
      break

    case "nw":
      mem.y += 0.5
      mem.x -= 0.5
      break

    case "sw":
      mem.y -= 0.5
      mem.x -= 0.5
      break
  }

  mem.max = Math.max(mem.max, Math.abs(mem.x) + Math.abs(mem.y))
  return mem
}, { x: 0, y: 0, max: 0 })

console.log(pos.max)