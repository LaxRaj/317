'use strict';

// Import the system-info module
const { getSystemInfo, printSystemInfo } = require('./system-info');

console.log('=== Import Demo ===\n');

// Use the imported function to print system info
printSystemInfo();

console.log('\n=== Using getSystemInfo function ===');
const info = getSystemInfo();
console.log('Just the hostname:', info.hostname);
console.log('Just the CPU cores:', info.cpuCores);
console.log('Memory usage percentage:', 
    ((info.totalMemoryMB - info.freeMemoryMB) / info.totalMemoryMB * 100).toFixed(2) + '%');
