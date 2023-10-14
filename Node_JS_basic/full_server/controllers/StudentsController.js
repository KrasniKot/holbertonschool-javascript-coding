const rD = require('../utils');

module.exports = class StudentsController {
  static async getAllStudents(request, response) {
    try {
      let body = 'This is the list of our students\n';

      const fields = await rD(process.argv[2]);

      for (const field of Object.keys(fields).sort()) {
        body += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }

      response.status(200).send(body.slice(0, -1));
    } catch (error) {
        response.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const accpt = ['CS', 'SWE'];

    if (!accpt.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      const fields = await rD(process.argv[2]);

      response.status(200).send(`List: ${fields[major].join(', ')}`);
    }
  } catch(error) {
      response.status(500).send(error.message);
  }
};
