/* eslint-disable max-len */
const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const fileContent = await fs.readFile('your_database.csv', 'utf-8');
      const fileLines = fileContent.trim().split('\n');

      // Check if the file is empty (no students)
      if (fileLines.length <= 1) {
        res.end('This is the list of our students:\nNumber of students: 0\n');
        return;
      }

      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object.values(studentGroups).reduce((sum, group) => sum + group.length, 0);
      const responseBody = `This is the list of our students:\nNumber of students: ${totalStudents}\n`;

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        responseBody += `Number of students in ${field}: ${group.length}. List: ${studentNames}\n`;
      }

      res.end(responseBody);
    } catch (error) {
      // Throw an error if the database is not available
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
