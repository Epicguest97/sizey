# 📦 File Size Formatter

Convert bytes into human-readable sizes like `1 KB`, `1 MB`, etc.  
Works as a Node.js function or CLI.

## Install
```bash
npm install sizey
```

## Usage 
In Node.js
```js
const formatFileSize = require("sizey");

console.log(formatFileSize(1024));        // 1 KB
console.log(formatFileSize(1048576));     // 1 MB
```

In cli
```bash
npx sizey 1024
```
