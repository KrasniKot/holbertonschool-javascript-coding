#!/usr/bin/node

const fs = require('fs');
const r = require('request');

r(process.argv[2], (e, res) => {
  fs.writeFile(process.argv[3], res.body, 'utf-8', (err) => { if (err) { console.error(err); } });
});
