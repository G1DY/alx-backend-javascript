/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/**
 * function countStudents that accepts a path in argument
 * The script should attempt to read the database file asynchronously
 * If the database is not available, it should throw an error
 * with the text Cannot load the database
 * If the database is available, it should log the following
 * message to the console Number of students: NUMBER_OF_STUDENTS
 * It should log the number of students in each field, and the list
 * with the following format: Number of students in FIELD: 6.
 * List: LIST_OF_FIRSTNAMES
 * CSV file can contain empty lines (at the end) -
 * and they are not a valid student!
 */

const fs = require('fs').promises;

const countStudents = async (dataPath) => {
  try {
    // Attempt to read the database file asynchronously
    const fileContent = await fs.readFile(dataPath, 'utf-8');
    const fileLines = fileContent.trim().split('\n');

    // Check if the file is empty (no students)
    if (fileLines.length <= 1) {
      console.log('Number of students: 0');
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
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (error) {
    // Throw an error if the database is not available
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
