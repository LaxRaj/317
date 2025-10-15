'use strict';
const os = require('os');

console.log('=== OS Monitor Demo ===\n');

// Function to calculate used memory percentage
function getUsedMemoryPercentage() {
    const used = ((os.totalmem() - os.freemem()) / os.totalmem()) * 100;
    return used.toFixed(2);
}

// Function to log system information
function logSystemInfo() {
    console.log('Hostname:', os.hostname());
    console.log('Free memory:', (os.freemem() / 1024 / 1024).toFixed(2), 'MB');
    console.log('Total memory:', (os.totalmem() / 1024 / 1024).toFixed(2), 'MB');
    console.log('Used memory:', getUsedMemoryPercentage() + '%');
    console.log('System uptime:', os.uptime(), 'seconds');
    console.log('---');
}

// Log system info every 2 seconds
const interval = setInterval(logSystemInfo, 2000);

// Stop the script after 10 seconds
setTimeout(() => {
    console.log('Stopping OS monitor...');
    clearInterval(interval);
    process.exit();
}, 10000);
