var fs = require('fs');
const DIR = '/Users/robertmanteghi/repos/emoji-art/src/resources/examples/'
let examples = fs.readdirSync(DIR).reduce((map, file) => {
  map[file] = fs.readFileSync(DIR+file, 'utf8')
  return map
}, {})

fs.writeFileSync(DIR+"examples.json", JSON.stringify(examples), 'utf8')