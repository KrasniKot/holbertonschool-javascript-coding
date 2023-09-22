#!/usr/bin/node

const fs = require('fs');
const f = process.argv[1];
const d = process.argv[2];

fs.writeFile(f, d, 'utf-8', (err, data) => { if (err) throw err; });
