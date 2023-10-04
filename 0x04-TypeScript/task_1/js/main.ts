interface Teacher {
  readonly firstName: string;
  fullTimeEmployee: boolean;
  readonly lastName: string;
  yearsOfExperience?: number;
  location: string;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string,  lastName: string): string;
}

const printTeacher: printTeacherFunction = function (
  firstName: string, 
  lastName: string): string {
    return `${firstName[0]} ${lastName}`;
  };

class StudentClass implements StudentInterface {
  public firstName: string;
  public lastName: string;
  constructor(firstName: string, lastName: string)
    this.firstName = firstName;
    this.lastName = lastName;
}

