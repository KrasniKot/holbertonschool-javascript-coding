const fs = require('fs');

module.exports = function countStudents(path) {
  let data = '';
  try {
    data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
  } catch (err) { throw Error('Cannot load the database'); }

  const lines = data.split('\n').filter((element) => element !== '');
  console.log(`Number of students: ${lines.length - 1}`);

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
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  }
};
