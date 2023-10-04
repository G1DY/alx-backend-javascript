interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Gideon',
  lastName: 'Sitienei',
  age: 50,
  location: 'Amsterdam',
}

const studentTwo: Student = {
  firstName: 'Gideon',
  lastName: 'Mbuvi',
  age: 20,
  location: 'Newyork',
}

let studentsList: Student[] = [studentOne, studentTwo];

const studentTable = document.createElement("table")
const studentBody = document.createElement("tbody")

studentsList.forEach((list) => {
  const studentFirstName = document.createElement("td");
  const studentLocation = document.createElement("td")
  const tableRow = document.createElement("tr")

  studentFirstName.textContent = list.firstName
  studentLocation.textContent = list.location
  tableRow.appendChild(studentFirstName)
  tableRow.appendChild(studentLocation)
  studentBody.appendChild(tableRow)
})

studentTable.appendChild(studentBody)
document.body.appendChild(studentTable)
