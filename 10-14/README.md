# Node.js fs Module - Comprehensive Activity

This folder contains a complete hands-on activity for learning Node.js file system operations, covering both synchronous and asynchronous (callback-based) APIs.

## 📁 Files Overview

### Core Files
- **`fs-activity.js`** - Main comprehensive script with all activities
- **`README.md`** - This documentation file

### Test Files
- **`notes.txt`** - Sample text file with mixed case and extra spaces
- **`emoji.txt`** - File with emoji content for encoding demonstrations
- **`a.txt`, `b.txt`, `c.txt`** - Files for parallel reading demonstrations

### Generated Files (created by running the script)
- **`out.txt`** - Output from sync read/write examples
- **`notes.normalized.txt`** - Normalized version of notes.txt (sync)
- **`notes.normalized.async.txt`** - Normalized version of notes.txt (async)
- **`app.log`** - Log file with timestamped entries
- **`hello.txt`** - Sample file created by callback write
- **`data.b64`** - Base64 encoded file for round-trip testing
- **`logs/YYYY-MM-DD.log`** - Daily log files

## 🚀 How to Run

### Quick Start
```bash
cd "/Users/lakshya/Desktop/School/fall 25/317/10-14"
node fs-activity.js
```

### Individual Activities
You can also run specific sections by modifying the main script or creating separate files for each activity.

## 🎯 Activities Covered

### 1. **Quick Reference Examples**
- `readFileSync` with and without encoding
- `writeFileSync` and append mode
- Buffer vs String handling

### 2. **Activity 1: Sync vs Callback**
- Demonstrates blocking vs non-blocking behavior
- Shows event loop impact
- Timing comparison

### 3. **Activity 2: Text Normalizer (Sync)**
- File reading with UTF-8 encoding
- Text processing (trim, lowercase)
- File writing with overwrite

### 4. **Activity 3: Logger with Append**
- Timestamped log entries
- Append mode with `{ flag: 'a' }`
- Log file management

### 5. **Activity 4: Encoding Explorer**
- UTF-8 text reading
- Buffer operations
- Hex and Base64 representations

### 6. **Activity 5: Parallel Reads**
- Multiple concurrent file operations
- Non-deterministic completion order
- Non-blocking behavior demonstration

### 7. **Activity 6: Async Normalizer**
- Migration from sync to async
- Error handling patterns
- Callback-based control flow

## 🏆 Stretch Challenges

### Challenge 1: Hex Dumper
- Binary file analysis
- Hex representation with ASCII
- Formatted output display

### Challenge 2: Daily Log
- Directory creation
- Date-based file naming
- Log rotation system

### Challenge 3: Encoding Round-Trip
- UTF-8 to Base64 conversion
- File-based encoding storage
- Round-trip verification

## 📚 Key Learning Points

### Synchronous vs Asynchronous
- **Sync APIs**: Simple, blocking, good for small scripts
- **Async APIs**: Non-blocking, scalable, essential for servers

### Encoding Handling
- **No encoding**: Returns Buffer (binary data)
- **UTF-8 encoding**: Returns human-readable string
- **Other encodings**: Base64, hex, latin1, etc.

### File Operations
- **Read**: `readFileSync()` vs `readFile()`
- **Write**: `writeFileSync()` vs `writeFile()`
- **Append**: Use `{ flag: 'a' }` option

### Error Handling
- Always handle errors in async operations
- Use try-catch for sync operations
- Implement proper error-first callback patterns

## 🔧 Code Patterns

### Basic File Reading
```javascript
// Sync
const data = fs.readFileSync('file.txt', { encoding: 'utf8' });

// Async
fs.readFile('file.txt', { encoding: 'utf8' }, (err, data) => {
    if (err) return console.error(err);
    console.log(data);
});
```

### File Writing
```javascript
// Sync
fs.writeFileSync('output.txt', content, { encoding: 'utf8' });

// Async
fs.writeFile('output.txt', content, { encoding: 'utf8' }, (err) => {
    if (err) return console.error(err);
    console.log('File written successfully');
});
```

### Append Mode
```javascript
fs.writeFileSync('log.txt', newEntry, { flag: 'a' });
```

## 🎨 Features Demonstrated

- **File I/O Operations**: Read, write, append
- **Encoding Handling**: UTF-8, Buffer, Base64, Hex
- **Error Handling**: Try-catch and error-first callbacks
- **Performance**: Sync vs async timing
- **Parallel Operations**: Concurrent file reads
- **Text Processing**: Normalization and transformation
- **Logging**: Timestamped entries and file management
- **Binary Analysis**: Hex dumps and encoding round-trips

## 🔍 Console Output

The script provides comprehensive console output showing:
- File operation results
- Timing comparisons
- Error handling examples
- Encoding demonstrations
- Performance metrics

## 📖 Next Steps

After completing this activity, you should be comfortable with:
- Choosing between sync and async file operations
- Handling different text encodings
- Implementing proper error handling
- Understanding event loop behavior
- Working with binary data and buffers

## 🚀 Advanced Topics

Consider exploring:
- **Promises**: Convert callbacks to promises using `fs.promises`
- **Streams**: For large file processing
- **File watching**: Using `fs.watch()` for real-time monitoring
- **Directory operations**: `readdir`, `mkdir`, `rmdir`
- **File metadata**: `stat`, `lstat` for file information

## 💡 Tips

- Use sync APIs only for small scripts or startup code
- Prefer async APIs for servers and scalable applications
- Always specify encoding when working with text files
- Handle errors consistently in async operations
- Consider using promises or async/await for cleaner code
- Use append mode for logging and data collection

Happy file system programming! 🎉
