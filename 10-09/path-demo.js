'use strict';
const path = require('path');

console.log('=== Path Module Demo ===\n');

// Print the current file's name
console.log('Current file name:', path.basename(__filename));

// Print its parent folder
console.log('Parent folder:', path.dirname(__filename));

// Print its extension
console.log('File extension:', path.extname(__filename));

// Print the parsed object using path.parse(__filename)
console.log('Parsed object:', path.parse(__filename));

// Use path.join() to create a path like /users/student/docs/notes.txt
const joinedPath = path.join('/users', 'student', 'docs', 'notes.txt');
console.log('Joined path:', joinedPath);

// Challenge: Function that returns just the file's name without its extension
function getFileNameWithoutExtension(filePath) {
    return path.basename(filePath, path.extname(filePath));
}

console.log('\n=== Challenge: File name without extension ===');
console.log('File name without extension:', getFileNameWithoutExtension(__filename));

// Test the function with different file types
console.log('Test with .js file:', getFileNameWithoutExtension('script.js'));
console.log('Test with .txt file:', getFileNameWithoutExtension('document.txt'));
console.log('Test with no extension:', getFileNameWithoutExtension('README'));
