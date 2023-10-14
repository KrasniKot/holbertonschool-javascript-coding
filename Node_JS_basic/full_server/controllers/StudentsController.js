const rD = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      let body = 'This is the list of our students\n';

      const fields = await rD(process.argv[2]);

      if (!fields || fields.length === 0) {
        return response.status(500).send('Cannot load the database');
      }

      for (const field of Object.keys(fields).sort()) {
        body += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }

      response.status(200).send(body.slice(0, -1));
    } catch (_) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const accpt = ['CS', 'SWE'];

    try {
      if (!accpt.includes(major)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        const fields = await rD(process.argv[2]);

        if (!fields || fields.length === 0) {
          return response.status(500).send('Cannot load the database');
        }

        response.status(200).send(`List: ${fields[major].join(', ')}`);
      }
    } catch (_) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
