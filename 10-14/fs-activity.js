'use strict';

// ========================================
// NODE.JS FS MODULE - COMPREHENSIVE ACTIVITY
// ========================================

const fs = require('fs');
const path = require('path');
const { join } = require('path');

console.log('🚀 Node.js fs Module Activity Starting...\n');

// ========================================
// QUICK REFERENCE EXAMPLES
// ========================================

function runQuickReferenceExamples() {
    console.log('📚 === QUICK REFERENCE EXAMPLES ===\n');
    
    // A) readFileSync → Buffer (no encoding)
    console.log('A) readFileSync → Buffer (no encoding):');
    try {
        const contents = fs.readFileSync(__filename);
        console.log('Buffer length:', contents.length);
        console.log('First 50 bytes:', contents.slice(0, 50));
    } catch (err) {
        console.error('Error:', err.message);
    }
    
    // B) readFileSync → String (utf8)
    console.log('\nB) readFileSync → String (utf8):');
    try {
        const contents = fs.readFileSync(__filename, { encoding: 'utf8' });
        console.log('String length:', contents.length);
        console.log('First 100 chars:', contents.substring(0, 100));
    } catch (err) {
        console.error('Error:', err.message);
    }
    
    // C) Read then Write (Sync) to out.txt
    console.log('\nC) Read then Write (Sync) to out.txt:');
    try {
        const contents = fs.readFileSync(__filename, { encoding: 'utf8' });
        fs.writeFileSync(join(__dirname, 'out.txt'), contents.toUpperCase());
        console.log('✅ Wrote out.txt with uppercase content');
    } catch (err) {
        console.error('Error:', err.message);
    }
    
    // D) Append Mode (flag: 'a')
    console.log('\nD) Append Mode (flag: "a"):');
    try {
        const contents = fs.readFileSync(__filename, { encoding: 'utf8' });
        fs.writeFileSync(join(__dirname, 'out.txt'), '\n--- APPENDED ---\n' + contents.toUpperCase(), {
            flag: 'a'
        });
        console.log('✅ Appended to out.txt');
    } catch (err) {
        console.error('Error:', err.message);
    }
}

// ========================================
// ACTIVITY 1: SPOT THE DIFFERENCE (Sync vs Callback)
// ========================================

function activity1_SyncVsCallback() {
    console.log('\n🎯 === ACTIVITY 1: SYNC VS CALLBACK ===\n');
    
    // Sync version
    console.log('SYNC VERSION:');
    console.log('START');
    try {
        const contents = fs.readFileSync('notes.txt', { encoding: 'utf8' });
        console.log('File content:', contents.substring(0, 50) + '...');
    } catch (err) {
        console.error('Sync read error:', err.message);
    }
    console.log('END');
    
    // Callback version
    console.log('\nCALLBACK VERSION:');
    console.log('START');
    fs.readFile('notes.txt', { encoding: 'utf8' }, (err, contents) => {
        if (err) {
            console.error('Callback read error:', err.message);
            return;
        }
        console.log('File content:', contents.substring(0, 50) + '...');
    });
    console.log('END');
    
    console.log('\n💡 Notice: Sync blocks until read completes, Callback defers output');
}

// ========================================
// ACTIVITY 2: TEXT NORMALIZER (Sync)
// ========================================

function activity2_TextNormalizer() {
    console.log('\n🎯 === ACTIVITY 2: TEXT NORMALIZER (SYNC) ===\n');
    
    try {
        // Read notes.txt synchronously
        const input = fs.readFileSync('notes.txt', { encoding: 'utf8' });
        console.log('Original content:');
        console.log(input);
        
        // Normalize: trim whitespace and lowercase
        const normalized = input
            .split('\n')
            .map(line => line.trim().toLowerCase())
            .join('\n');
        
        console.log('\nNormalized content:');
        console.log(normalized);
        
        // Write to normalized file
        fs.writeFileSync('notes.normalized.txt', normalized, { encoding: 'utf8' });
        console.log('\n✅ Wrote notes.normalized.txt');
        
    } catch (err) {
        console.error('Normalizer error:', err.message);
    }
}

// ========================================
// ACTIVITY 3: LOGGER WITH APPEND (Sync)
// ========================================

function activity3_Logger() {
    console.log('\n🎯 === ACTIVITY 3: LOGGER WITH APPEND (SYNC) ===\n');
    
    try {
        const timestamp = new Date().toISOString();
        const logEntry = `${timestamp} - ping\n`;
        
        fs.writeFileSync('app.log', logEntry, { flag: 'a' });
        console.log('✅ Appended to app.log:', logEntry.trim());
        
        // Show current log content
        const logContent = fs.readFileSync('app.log', { encoding: 'utf8' });
        console.log('\nCurrent app.log content:');
        console.log(logContent);
        
    } catch (err) {
        console.error('Logger error:', err.message);
    }
}

// ========================================
// ACTIVITY 4: ENCODING EXPLORER (Callback)
// ========================================

function activity4_EncodingExplorer() {
    console.log('\n🎯 === ACTIVITY 4: ENCODING EXPLORER (CALLBACK) ===\n');
    
    // Read with UTF-8 encoding
    fs.readFile('emoji.txt', { encoding: 'utf8' }, (err, text) => {
        if (err) {
            console.error('UTF-8 read error:', err.message);
            return;
        }
        console.log('UTF-8 text:', text);
        
        // Read without encoding (Buffer)
        fs.readFile('emoji.txt', (err2, buf) => {
            if (err2) {
                console.error('Buffer read error:', err2.message);
                return;
            }
            console.log('Buffer length:', buf.length);
            console.log('Hex representation:', buf.toString('hex'));
            console.log('Base64 representation:', buf.toString('base64'));
        });
    });
}

// ========================================
// ACTIVITY 5: PARALLEL READS (Callback)
// ========================================

function activity5_ParallelReads() {
    console.log('\n🎯 === ACTIVITY 5: PARALLEL READS (CALLBACK) ===\n');
    
    const files = ['a.txt', 'b.txt', 'c.txt'];
    
    const print = (err, contents) => {
        if (err) {
            console.error('Read error:', err.message);
            return;
        }
        console.log('--- file content ---');
        console.log(contents.toString());
    };
    
    console.log('Kicking off reads...');
    files.forEach(file => {
        fs.readFile(file, print);
    });
    
    console.log('All read operations initiated (non-blocking)');
}

// ========================================
// ACTIVITY 6: MIGRATE SYNC → CALLBACK (Refactor)
// ========================================

function activity6_AsyncNormalizer() {
    console.log('\n🎯 === ACTIVITY 6: ASYNC NORMALIZER (CALLBACK) ===\n');
    
    fs.readFile('notes.txt', { encoding: 'utf8' }, (err, input) => {
        if (err) {
            console.error('Read error:', err.message);
            return;
        }
        
        console.log('Read notes.txt successfully');
        
        // Transform text
        const normalized = input
            .split('\n')
            .map(line => line.trim().toLowerCase())
            .join('\n');
        
        console.log('Text normalized');
        
        // Write normalized text
        fs.writeFile('notes.normalized.async.txt', normalized, { encoding: 'utf8' }, (werr) => {
            if (werr) {
                console.error('Write error:', werr.message);
                return;
            }
            console.log('✅ Wrote notes.normalized.async.txt (async)');
        });
    });
}

// ========================================
// STRETCH CHALLENGES
// ========================================

function challenge1_HexDumper() {
    console.log('\n🏆 === CHALLENGE 1: HEX DUMPER ===\n');
    
    fs.readFile('emoji.txt', (err, buf) => {
        if (err) {
            console.error('Hex dumper error:', err.message);
            return;
        }
        
        console.log('Hex dump of emoji.txt:');
        console.log('Offset  Hex Data                                    ASCII');
        console.log('------  ----------------------------------------    ----------------');
        
        for (let i = 0; i < buf.length; i += 16) {
            const chunk = buf.slice(i, i + 16);
            const offset = i.toString(16).padStart(6, '0');
            const hex = chunk.toString('hex').match(/.{1,2}/g).join(' ').padEnd(48);
            const ascii = chunk.toString('ascii').replace(/[^\x20-\x7E]/g, '.');
            
            console.log(`${offset}  ${hex}    ${ascii}`);
        }
    });
}

function challenge2_DailyLog() {
    console.log('\n🏆 === CHALLENGE 2: DAILY LOG ===\n');
    
    try {
        // Create logs directory if it doesn't exist
        if (!fs.existsSync('logs')) {
            fs.mkdirSync('logs', { recursive: true });
            console.log('Created logs directory');
        }
        
        // Generate daily log filename
        const today = new Date().toISOString().slice(0, 10);
        const logFile = `logs/${today}.log`;
        const timestamp = new Date().toISOString();
        const logEntry = `${timestamp} - Daily log entry\n`;
        
        // Append to daily log
        fs.writeFileSync(logFile, logEntry, { flag: 'a' });
        console.log(`✅ Appended to ${logFile}`);
        
        // Show log content
        const logContent = fs.readFileSync(logFile, { encoding: 'utf8' });
        console.log(`\nContent of ${logFile}:`);
        console.log(logContent);
        
    } catch (err) {
        console.error('Daily log error:', err.message);
    }
}

function challenge3_EncodingRoundTrip() {
    console.log('\n🏆 === CHALLENGE 3: ENCODING ROUND-TRIP ===\n');
    
    try {
        // Read original UTF-8 text
        const originalText = fs.readFileSync('emoji.txt', { encoding: 'utf8' });
        console.log('Original text:', originalText);
        
        // Convert to Base64
        const base64Data = Buffer.from(originalText, 'utf8').toString('base64');
        console.log('Base64 encoded:', base64Data);
        
        // Write Base64 to file
        fs.writeFileSync('data.b64', base64Data, { encoding: 'utf8' });
        console.log('✅ Wrote data.b64');
        
        // Read Base64 file and decode back to UTF-8
        const readBase64 = fs.readFileSync('data.b64', { encoding: 'utf8' });
        const decodedText = Buffer.from(readBase64, 'base64').toString('utf8');
        console.log('Decoded text:', decodedText);
        
        // Verify equality
        const isEqual = originalText === decodedText;
        console.log('Round-trip successful:', isEqual ? '✅ YES' : '❌ NO');
        
        if (!isEqual) {
            console.log('Original length:', originalText.length);
            console.log('Decoded length:', decodedText.length);
        }
        
    } catch (err) {
        console.error('Round-trip error:', err.message);
    }
}

// ========================================
// ADDITIONAL EXAMPLES
// ========================================

function additionalExamples() {
    console.log('\n📝 === ADDITIONAL EXAMPLES ===\n');
    
    // Write with encoding (Callback)
    console.log('Writing hello.txt with callback...');
    fs.writeFile('hello.txt', 'Hallo Welt!\n', { encoding: 'utf8' }, (err) => {
        if (err) {
            console.error('Write failed:', err.message);
            return;
        }
        console.log('✅ Wrote hello.txt');
        
        // Read as different encodings
        fs.readFile('hello.txt', { encoding: 'utf8' }, (e, text) => {
            if (e) {
                console.error('UTF-8 read error:', e.message);
                return;
            }
            console.log('UTF-8 text:', text);
            
            fs.readFile('hello.txt', (e2, buf) => {
                if (e2) {
                    console.error('Buffer read error:', e2.message);
                    return;
                }
                console.log('Buffer hex:', buf.toString('hex'));
                console.log('Buffer base64:', buf.toString('base64'));
            });
        });
    });
}

// ========================================
// PERFORMANCE COMPARISON
// ========================================

function performanceComparison() {
    console.log('\n⚡ === PERFORMANCE COMPARISON ===\n');
    
    const testFile = 'notes.txt';
    
    // Sync timing
    console.log('Testing sync read...');
    const syncStart = Date.now();
    try {
        fs.readFileSync(testFile, { encoding: 'utf8' });
        const syncEnd = Date.now();
        console.log(`Sync read took: ${syncEnd - syncStart}ms`);
    } catch (err) {
        console.error('Sync read error:', err.message);
    }
    
    // Async timing
    console.log('Testing async read...');
    const asyncStart = Date.now();
    fs.readFile(testFile, { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.error('Async read error:', err.message);
            return;
        }
        const asyncEnd = Date.now();
        console.log(`Async read took: ${asyncEnd - asyncStart}ms`);
        console.log('Note: Async allows other operations to continue during I/O');
    });
}

// ========================================
// MAIN EXECUTION
// ========================================

async function runAllActivities() {
    console.log('🎯 Running all fs module activities...\n');
    
    // Run all activities
    runQuickReferenceExamples();
    
    // Wait a bit between activities for better output readability
    setTimeout(() => activity1_SyncVsCallback(), 1000);
    setTimeout(() => activity2_TextNormalizer(), 2000);
    setTimeout(() => activity3_Logger(), 3000);
    setTimeout(() => activity4_EncodingExplorer(), 4000);
    setTimeout(() => activity5_ParallelReads(), 5000);
    setTimeout(() => activity6_AsyncNormalizer(), 6000);
    
    // Run challenges
    setTimeout(() => challenge1_HexDumper(), 7000);
    setTimeout(() => challenge2_DailyLog(), 8000);
    setTimeout(() => challenge3_EncodingRoundTrip(), 9000);
    
    // Additional examples
    setTimeout(() => additionalExamples(), 10000);
    setTimeout(() => performanceComparison(), 11000);
    
    // Summary
    setTimeout(() => {
        console.log('\n✅ === SUMMARY ===');
        console.log('📚 Key Takeaways:');
        console.log('• Sync APIs are simple but block the event loop');
        console.log('• Callback APIs are non-blocking, better for scalable apps');
        console.log('• Encoding determines whether you get Buffer or string');
        console.log('• Use { flag: "a" } for append mode');
        console.log('• Always handle errors in async operations');
        console.log('• Parallel async operations may complete in any order');
        console.log('\n🎉 All fs module activities completed!');
    }, 12000);
}

// Run the activities
runAllActivities();
