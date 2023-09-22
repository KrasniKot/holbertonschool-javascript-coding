#!/usr/bin/node

const r = require('request');

r(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, (e, res) => {
  console.log(JSON.parse(res.body).title);
});
