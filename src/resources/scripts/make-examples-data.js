var fs = require('fs');
const EXAMPLES_DIR = '/Users/robertmanteghi/repos/emoji-art/src/resources/examples/'
const DATA_DIR = '/Users/robertmanteghi/repos/emoji-art/src/resources/data/'
let examples = fs.readdirSync(EXAMPLES_DIR).reduce((ls, file) => {
  ls.push({filename: file.slice(0, -4), text: fs.readFileSync(EXAMPLES_DIR+file, 'utf8')})
  return ls
}, [])
console.log(examples)
fs.writeFileSync(DATA_DIR+"examples.json", JSON.stringify(examples), 'utf8')