import type {
  AscentTableInterface,
  FilterAscentsInterface,
} from '../interfaces/AscentsInterface';

export default function filterAscents(
  data: AscentTableInterface,
  filter: FilterAscentsInterface,
) {
  return (
    data.route.name.toLowerCase().includes(filter.route.toLowerCase()) &&
    data.format.format === (filter.format || data.format.format) &&
    data.style.style === (filter.style || data.style.style) &&
    filterGrades(
      filter.minGrade || 'a',
      filter.maxGrade || 'zzzzzz',
      data.myGrade.grade,
    )
  );
}

function filterGrades(minGrade: string, maxGrade: string, grade: string) {
  const gradeSum = calculateFrenchGrade(grade);
  const minGradeSum = calculateFrenchGrade(minGrade);
  const maxGradeSum = calculateFrenchGrade(maxGrade);
  return gradeSum >= minGradeSum && gradeSum <= maxGradeSum;
}

function calculateFrenchGrade(grade: string) {
  return grade.split('').reduce((acc, curr, index) => {
    if (Number(curr)) return acc + Number(curr);
    else if (index === 2) return acc + curr.charCodeAt(0) * 0.01;
    else return acc + curr.charCodeAt(0) * 0.1;
  }, 0);
}
