'use strict';

console.log('=== Process Module Demo ===\n');

// Print the platform, current working directory, and total memory usage
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

console.log('\n=== Challenge: OS Check ===');
checkOS();

// Use setTimeout to exit the process after 3 seconds
console.log('\nProcess will exit in 3 seconds...');
setTimeout(() => {
    console.log('Exiting...');
    process.exit();
}, 3000);
