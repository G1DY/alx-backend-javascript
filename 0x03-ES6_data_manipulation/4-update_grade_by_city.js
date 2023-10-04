export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((student) => student.location === city).map((student) => {
    const newStudents = student;
    newStudents.grade = 'N/A';
    for (const grade of newGrades) {
      if (newStudents.id === grade.studentId) {
        newStudents.grade = grade.grade;
      }
    }
    return newStudents;
  });
}
