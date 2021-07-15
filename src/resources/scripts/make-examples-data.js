var fs = require('fs');
const DIR = '/Users/robertmanteghi/repos/emoji-art/src/resources/examples/'
let examples = fs.readdirSync(DIR).reduce((ls, file) => {
  ls.add({filename: file, text: fs.readFileSync(DIR+file, 'utf8')})
  return ls
}, [])

fs.writeFileSync(DIR+"examples.json", JSON.stringify(examples), 'utf8')