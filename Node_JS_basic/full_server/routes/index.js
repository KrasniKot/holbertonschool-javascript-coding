const express = require('express');

const r = express.Router();
const AC = require('../controllers/AppController');
const SC= require('../controllers/StudentsController');

r.get('/', AC.getHomepage)
r.get('/students', SC.getAllStudents);
r.get('/students/:major', SC.getAllStudentsByMajor);

module.exports = r;
