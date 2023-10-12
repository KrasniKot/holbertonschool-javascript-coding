const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((element) => element !== '');
      let result = `Number of students: ${lines.length - 1}\n`;
      console.log(`Number of students: ${lines.length - 1}`);

      const splitedLines = lines.map((line) => line.split(','));
      const fields = splitedLines
        .map((line) => line[3])
        .filter((field) => field !== undefined);
      const fieldSet = new Set(fields);

      for (const field of fieldSet) {
        if (field !== 'field') {
          const students = splitedLines
            .filter((line) => line[3] === field)
            .map((line) => line[0]);
          result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
      }
      resolve(result.slice(0, -1));
    });
  });
};
