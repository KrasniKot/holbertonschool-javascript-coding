#!/usr/bin/node

const r = require('request');

r(process.argv[2], (e, res) => {
  let x = 0;

  JSON.parse(res.body).results.forEach(title => {
    for (const person of title.characters) { if (person.includes('18')) { x += 1; } }
  });
  console.log(x);
});
