const fs = require('fs').promises;

module.exports = async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
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
        console.log(`Number of students in ${field}: ${students.length}. List:`, students.join(', '));
      }
    }
  } catch (err) { throw new Error('Cannot load database'); }
};

