export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((studentId, student) => studentId + student.id, 0);
}
