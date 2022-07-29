var fs = require('fs');
var path = require('path')

const EXAMPLES_DIR = path.join(__dirname, '..', 'example_art')
const DATA_DIR = path.join(__dirname, '..', 'src', 'resources')
let examples = fs.readdirSync(EXAMPLES_DIR).reduce((ls, file) => {
  ls.push({filename: file.slice(0, -4), text: fs.readFileSync(path.join(EXAMPLES_DIR,file), 'utf8')})
  return ls
}, [])
console.log(examples)
fs.writeFileSync(path.join(DATA_DIR,"examples.json"), JSON.stringify(examples), 'utf8')