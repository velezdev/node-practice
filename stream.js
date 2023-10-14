// if we have large files, it can be more efficient to not move everything at once
const fs = require('fs')

// can use path module but hardcoding it for ease
const rs = fs.createReadStream('./files/hipster_lorem.txt', {encoding: 'utf8'})

// tell it what file to write it to 
const ws = fs.createWriteStream('./files/new_hipster_lorem.txt') 

// listen for the data coming into the stream
// rs.on('data', (dataChunk) => {
// 	ws.write(dataChunk) // this will generate the new_hipster_lorem.txt file 
// })

// a better way to do the above; piping
rs.pipe(ws)