const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")

const pos = raw.split(",").reduce((mem, dir) => {
  switch(dir) {
    case "n":
      mem.y += 1
      return mem

    case "s":
      mem.y -= 1
      return mem

    case "ne":
      mem.y += 0.5
      mem.x += 0.5
      return mem

    case "se":
      mem.y -= 0.5
      mem.x += 0.5
      return mem

    case "nw":
      mem.y += 0.5
      mem.x -= 0.5
      return mem

    case "sw":
      mem.y -= 0.5
      mem.x -= 0.5
      return mem
  }
}, { x: 0, y: 0 })

console.log(Math.abs(pos.x) + Math.abs(pos.y))