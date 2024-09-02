export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(({ location }) => location === city)
    .map((student) => {
      const matchingGrades = newGrades.filter(({ studentId }) => studentId === student.id);
      const grade = matchingGrades.length > 0 ? matchingGrades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
