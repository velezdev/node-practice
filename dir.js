const fs = require('fs')

// create a directory
fs.mkdir('./new', (err) => {
	if (err) throw err;
	console.log('i created a directory!')
})