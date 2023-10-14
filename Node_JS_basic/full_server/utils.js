/* eslint-disable array-callback-return, consistent-return */
const fs = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) { reject(err); }

      const lines = data.split('\n').filter((element) => element !== '');
      const fields = new Set(lines.map((line) => line.split(',')[3]));
      const fieldStnts = {};

      for (const field of fields) {
        if (field !== 'field') {
          fieldStnts[field] = lines.map((line) => {
            const student = line.split(',')[0];
            if (student !== 'firstname' && line.split(',')[3] === field) return student;
          }).filter((student) => student !== undefined);
        }
      }
      resolve(fieldStnts);
    });
  });
};
