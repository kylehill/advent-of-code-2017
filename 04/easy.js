const fs = require("fs")

const raw = fs.readFileSync("input.txt", "utf8")
const lines = raw.split("\n")

const val = lines.filter((line) => {
  let words = {}

  const w = line.split(" ")
  for (let i = 0; i < w.length; i++) {
    const word = w[i]
    if (words[word]) {
      return false
    }

    words[word] = 1
  }

  return true
})

console.log(val.length)