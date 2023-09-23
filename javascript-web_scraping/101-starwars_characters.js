#!/usr/bin/node

const rqst = require('request');

rqst(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, (err, res) => {
  if (err) { console.error(err); } else {
    for (const c of JSON.parse(res.body).characters) {
      rqst(c, (e, r) => { console.log(JSON.parse(r.body).name); });
    }
  }
});
