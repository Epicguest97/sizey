#!/usr/bin/env node

const formatFileSize = require("./index.js");

// Get value from command line
const input = process.argv[2];
const decimals = process.argv[3] ? parseInt(process.argv[3], 10) : 2;

if (!input) {
  console.log("Usage: filesize-formatter <bytes> [decimals]");
  process.exit(1);
}

console.log(formatFileSize(Number(input), decimals));
