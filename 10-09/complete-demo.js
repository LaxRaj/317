'use strict';

// Import all required modules
const path = require('path');
const os = require('os');

console.log('🚀 === COMPLETE NODE.JS CORE MODULES DEMO === 🚀\n');

// ========================================
// 1. PATH MODULE DEMONSTRATIONS
// ========================================
console.log('📁 === PATH MODULE ===');
console.log('Current file name:', path.basename(__filename));
console.log('Parent folder:', path.dirname(__filename));
console.log('File extension:', path.extname(__filename));
console.log('Parsed object:', path.parse(__filename));
console.log('Joined path example:', path.join('/users', 'student', 'docs', 'notes.txt'));

// Challenge: Function that returns just the file's name without its extension
function getFileNameWithoutExtension(filePath) {
    return path.basename(filePath, path.extname(filePath));
}
console.log('File name without extension:', getFileNameWithoutExtension(__filename));

// ========================================
// 2. PROCESS MODULE DEMONSTRATIONS
// ========================================
console.log('\n⚙️ === PROCESS MODULE ===');
console.log('Platform:', process.platform);
console.log('Current working directory:', process.cwd());
console.log('Memory usage:', process.memoryUsage());

// Add a new environment variable and print it
process.env.MY_APP_MODE = 'development';
console.log('New environment variable:', process.env.MY_APP_MODE);

// Challenge: Check if the OS is Windows
function checkOS() {
    if (process.platform === 'win32') {
        console.log('Running on Windows!');
    } else {
        console.log('Running on another OS!');
    }
}
console.log('OS Check:', checkOS());

// ========================================
// 3. OS MODULE DEMONSTRATIONS
// ========================================
console.log('\n💻 === OS MODULE ===');
console.log('Hostname:', os.hostname());
console.log('Home directory:', os.homedir());
console.log('Temp directory:', os.tmpdir());
console.log('System uptime:', os.uptime(), 'seconds');
console.log('CPU cores:', os.cpus().length);

// Memory information
const totalMemMB = (os.totalmem() / 1024 / 1024).toFixed(2);
const freeMemMB = (os.freemem() / 1024 / 1024).toFixed(2);
const usedMemMB = (totalMemMB - freeMemMB).toFixed(2);
const usedMemPercent = ((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2);

console.log('Total memory:', totalMemMB, 'MB');
console.log('Free memory:', freeMemMB, 'MB');
console.log('Used memory:', usedMemMB, 'MB');
console.log('Used memory percentage:', usedMemPercent + '%');

// ========================================
// 4. COMBINED SYSTEM INFORMATION
// ========================================
console.log('\n📊 === COMPLETE SYSTEM INFORMATION ===');

function getCompleteSystemInfo() {
    return {
        // Path information
        currentFile: __filename,
        currentDir: __dirname,
        fileName: path.basename(__filename),
        fileExtension: path.extname(__filename),
        
        // Process information
        platform: process.platform,
        workingDirectory: process.cwd(),
        nodeVersion: process.version,
        processMemory: process.memoryUsage(),
        
        // OS information
        hostname: os.hostname(),
        osType: os.type(),
        osRelease: os.release(),
        homeDirectory: os.homedir(),
        tempDirectory: os.tmpdir(),
        systemUptime: os.uptime(),
        cpuCores: os.cpus().length,
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        usedMemory: os.totalmem() - os.freemem(),
        usedMemoryPercent: ((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)
    };
}

const systemInfo = getCompleteSystemInfo();

// Display formatted system information
console.log('📁 File Information:');
console.log('  Current file:', systemInfo.currentFile);
console.log('  File name:', systemInfo.fileName);
console.log('  File extension:', systemInfo.fileExtension);
console.log('  Current directory:', systemInfo.currentDir);

console.log('\n⚙️ Process Information:');
console.log('  Platform:', systemInfo.platform);
console.log('  Node.js version:', systemInfo.nodeVersion);
console.log('  Working directory:', systemInfo.workingDirectory);
console.log('  Process memory (RSS):', (systemInfo.processMemory.rss / 1024 / 1024).toFixed(2), 'MB');

console.log('\n💻 System Information:');
console.log('  Hostname:', systemInfo.hostname);
console.log('  OS Type:', systemInfo.osType);
console.log('  OS Release:', systemInfo.osRelease);
console.log('  Home directory:', systemInfo.homeDirectory);
console.log('  Temp directory:', systemInfo.tempDirectory);
console.log('  System uptime:', systemInfo.systemUptime, 'seconds');
console.log('  CPU cores:', systemInfo.cpuCores);

console.log('\n🧠 Memory Information:');
console.log('  Total memory:', (systemInfo.totalMemory / 1024 / 1024).toFixed(2), 'MB');
console.log('  Free memory:', (systemInfo.freeMemory / 1024 / 1024).toFixed(2), 'MB');
console.log('  Used memory:', (systemInfo.usedMemory / 1024 / 1024).toFixed(2), 'MB');
console.log('  Memory usage:', systemInfo.usedMemoryPercent + '%');

// ========================================
// 5. LIVE MONITORING DEMO
// ========================================
console.log('\n📈 === LIVE SYSTEM MONITORING (5 seconds) ===');
console.log('Monitoring system stats every 1 second...\n');

let monitorCount = 0;
const maxMonitors = 5;

const monitorInterval = setInterval(() => {
    monitorCount++;
    const currentTime = new Date().toLocaleTimeString();
    const uptime = os.uptime();
    const freeMem = (os.freemem() / 1024 / 1024).toFixed(2);
    const usedPercent = ((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2);
    
    console.log(`[${currentTime}] Uptime: ${uptime}s | Free Memory: ${freeMem}MB | Used: ${usedPercent}%`);
    
    if (monitorCount >= maxMonitors) {
        clearInterval(monitorInterval);
        console.log('\n✅ === DEMO COMPLETE ===');
        console.log('All Node.js core modules (path, process, os) have been demonstrated!');
        console.log('🎉 Thanks for exploring Node.js core modules!');
    }
}, 1000);

