const fs = require('fs')

// if the directory doesn't exist, do what's inside the 'if' statement
// create a directory
if (!fs.existsSync('./new')) {
	fs.mkdir('./new', (err) => {
		if (err) throw err;
		console.log('i created a directory!')
	})
}

// if the directory does exist, remove it
if (fs.existsSync('./new')) {
	fs.rmdir('./new', (err) => {
		if (err) throw err;
		console.log('i removed a directory!')
	})
}