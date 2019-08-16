const fs = require('fs')
const readline = require('readline')

const input = fs.createReadStream('dict.txt', {encoding: 'utf-8'});
const lineReader = readline.createInterface({ input });

let prefix = null
const options = []

const results = []

for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i][0] === '-') {
        options.push(process.argv[i].substr(1))
    } else {
        prefix = process.argv[i]
    }
}

lineReader.on('line', (line) => {
    if (line.indexOf(prefix) === 0) {
        results.push(line)
    }
});

lineReader.on('close', () => {
    if (options.indexOf('n') !== -1) {
        console.log(results.length)
    } else {
        results.forEach((val) => { console.log(val) })
    }
})