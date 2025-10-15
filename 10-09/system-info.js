'use strict';
const path = require('path');
const os = require('os');

// Function to get system information
function getSystemInfo() {
    const info = {
        currentWorkingDirectory: process.cwd(),
        totalMemoryMB: (os.totalmem() / 1024 / 1024).toFixed(2),
        freeMemoryMB: (os.freemem() / 1024 / 1024).toFixed(2),
        osType: os.type(),
        platform: process.platform,
        currentFilePath: __filename,
        hostname: os.hostname(),
        homeDirectory: os.homedir(),
        tempDirectory: os.tmpdir(),
        cpuCores: os.cpus().length,
        systemUptime: os.uptime()
    };
    
    return info;
}

// Function to print system information
function printSystemInfo() {
    const info = getSystemInfo();
    
    console.log('=== System Information ===\n');
    console.log('Current working directory:', info.currentWorkingDirectory);
    console.log('Total memory:', info.totalMemoryMB, 'MB');
    console.log('Free memory:', info.freeMemoryMB, 'MB');
    console.log('OS type:', info.osType);
    console.log('Platform:', info.platform);
    console.log('Current file path:', info.currentFilePath);
    console.log('Hostname:', info.hostname);
    console.log('Home directory:', info.homeDirectory);
    console.log('Temp directory:', info.tempDirectory);
    console.log('CPU cores:', info.cpuCores);
    console.log('System uptime:', info.systemUptime, 'seconds');
}

// Export the function for use in other files
module.exports = {
    getSystemInfo,
    printSystemInfo
};

// If this file is run directly, print the system info
if (require.main === module) {
    printSystemInfo();
}
