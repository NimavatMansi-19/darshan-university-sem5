const fs = require('fs');

// 1. Write a file
fs.writeFileSync('example.txt', 'Hello from Node.js!');
console.log('File created.');

// 2. Read the file
const content = fs.readFileSync('example.txt', 'utf8');
console.log('File content:', content);

// 3. Append to the file
fs.appendFileSync('example.txt', '\nThis is appended text.');
console.log('Text appended.');

// 4. Rename the file
fs.renameSync('example.txt', 'newExample.txt');
console.log('File renamed.');

// 5. Delete the file
fs.unlinkSync('newExample.txt');
console.log('File deleted.');
