export default function createIteratorObject(report) {
  let employees = [];
  for (const list of Object.values(report.allemployees)) {
    employees = [...employees, ...list];
  }
  return employees;
}
