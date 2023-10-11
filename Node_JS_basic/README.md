# NodeJS Basics

## Tasks:

### Task 0 Executing basic javascript with Node JS:
In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.

### Task 1 Using Process stdin:
Create a program named `1-stdin.js` that will be executed through command line:
* It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
* The user should be able to input their name on a new line
* The program should display `Your name is: INPUT`
* When the user ends the program, it should display `This important software is now closing` (followed by a new line)

### Task 2 Reading a file synchronously with Node JS:
Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`
* Create a function named `countStudents`. It should accept a path in argument
* The script should attempt to read the database file synchronously
* If the database is not available, it should throw an error with the text `Cannot load the database`
* If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
* It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
* CSV file can contain empty lines (at the end) and they are not a valid student!

### Task 3 Reading a file asynchronously with Node JS:
Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`
* Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
* The script should attempt to read the database file asynchronously
* The function should return a Promise
* If the database is not available, it should throw an error with the text `Cannot load the database`
* If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
* It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
* CSV file can contain empty lines (at the end) - and they are not a valid student!

#### Done:
* 2 of 9
