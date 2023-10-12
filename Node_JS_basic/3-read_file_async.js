const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((element) => element !== '');
      let res = `Number of students: ${lines.length - 1}\n`;
      console.log(res.slice(0,-1));

      const splitedLines = lines.map((line) => line.split(','));
      const fields = splitedLines
        .map((line) => line.filter((element) => line.indexOf(element) === 3))
        .flat();
      const fieldSet = new Set(fields);

      for (const field of fieldSet) {
        if (field !== 'field') {
          const students = splitedLines
            .map((line) => line.filter(() => line[3] === field)
              .filter((element) => line.indexOf(element) === 0))
            .flat();
          res += `Number of students in ${field}: ${students.length}. List:, ${students.join(', ')}\n`;
          console.log(`Number of students in ${field}: ${students.length}. List:`, students.join(', '));
        }
      }
      resolve(res.slice(0, -1));
    });
  });
};
