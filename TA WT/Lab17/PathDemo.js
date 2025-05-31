// Import the path module
const path = require('path');

// Get the base file name
console.log("Base filename:", path.basename(__filename));

// Get the directory name
console.log("Directory:", path.dirname(__filename));

// Get the file extension
console.log("Extension:", path.extname(__filename));

// Create a full path by joining parts
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log("Joined path:", fullPath);

// Parse the path into parts
console.log("Parsed path object:", path.parse(__filename));
