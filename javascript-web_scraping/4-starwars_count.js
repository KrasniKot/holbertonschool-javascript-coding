#!/usr/bin/node

const r = require('request');

r('https://swapi-api.hbtn.io/api/films/', (e, res) => {
  // console.log(JSON.parse(res.body).results)
  let x = 0;

  JSON.parse(res.body).results.forEach(title => {
    for (const person of title.characters) { if (person.id === 18) { x += 1; } }
    console.log(x);
  });
});
