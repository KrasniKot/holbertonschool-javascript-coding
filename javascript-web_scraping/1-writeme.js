#!/usr/bin/node

const fs = require('fs');
const f = process.argv[2];
const d = process.argv[3];

fs.writeFile(f, d, 'utf-8', (err, data) => { if (err) throw err; });
