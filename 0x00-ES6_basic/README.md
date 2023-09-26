<center><h1>0x00. ES6 Basics</h1></center>
In this project we learnt the various features of ES6 javascript and did tasks on them to test understanding

---

<center><h2>Concepts</h2></center>

- [Modern Javascript](Modern Javascript)
- [Software Linter](https://intranet.alxswe.com/concepts/542)

<center><h2>Resources</h2></center>

- [ECMAScript 6 - ECMAScript 2015](https://intranet.alxswe.com/rltoken/NW1dFLFExQ12_hD8yvkV3A)
- [Statements and declarations](https://intranet.alxswe.com/rltoken/sroRUsUvOZV28V99MHDenw)
- [Arrow functions](https://intranet.alxswe.com/rltoken/N2WLylppCtkkX3YFFtyUHw)
- [Default parameters](https://intranet.alxswe.com/rltoken/kbw9gMO6sdeOKAY23SYVgA)
- [Rest parameter](https://intranet.alxswe.com/rltoken/erZfCvacuGVk9z1CQlJvYQ)
- [Javascript ES6 — Iterables and Iterators](https://intranet.alxswe.com/rltoken/sylDP0vzVBrMvefkXCpYag)

### **Learning Objectives**

```
    What ES6 is
    New features introduced in ES6
    The difference between a constant and a variable
    Block-scoped variables
    Arrow functions and function parameters default to them
    Rest and spread function parameters
    String templating in ES6
    Object creation and their properties in ES6
    Iterators and for-of loops
```

### **Requirements**

```
    All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
    Allowed editors: vi, vim, emacs, Visual Studio Code
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the js extension
    Your code will be tested using the Jest Testing Framework
    Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
    All of your functions must be exported
```

### **Setup**

```
Install NodeJS 12.11.x

(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3

Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.
Configuration files

Add the files below to your project directory
package.json
Click here to show/hide file contents
babel.config.js
Click here to show/hide file contents
.eslintrc.js
Click here to show/hide file contents
Finally…

Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.
```

<center><h3>Project Tasks</h3></center>

| Task | Description |
| ---- | ----------- |
| 0. Const or let? | Modify: function taskFirst to instantiate variables using const, function taskNext to instantiate variables using let |
| 1. Block Scope  | Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block. |
| 2. Arrow functions | Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after) |

#### Function to Rewrite using =>

```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

| 3. Parameter defaults | Condense the internals of the following function to 1 line - without changing the name of each function/variable. Hint: The key here to define default parameter values for the function parameters. |

#### Function to Condense

```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

| 4. Rest parameter syntax for functions | Modify the following function to return the number of arguments passed to it using the rest parameter syntax |

#### Function to Modify

```
export default function returnHowManyArguments() {

}
```

| 5. The wonders of spread syntax | Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long. |

#### Demonstrating the spread function

```
export default function concatArrays(array1, array2, string) {
}
```

| 6. Take advantage of template literals | Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined. |

#### Demonstrate template literals 

```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

| 7. Object property value shorthand syntax | Modify the following function’s budget object to simply use the keyname instead. |

#### Budget objects to modify

```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

| 8. No need to create empty objects before adding in properties | Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object |

#### getFullBudgetObject function

```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

| 9. ES6 method properties | Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object |
| 10. For...of Loops | Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly. |

#### appendToEachArrayValue function

```
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```

| 11. Iterator | Write a function named createEmployeesObject that will receive two arguments: departmentName (String), employees (Array of Strings) |

#### createEmployeesObject function

```
export default function createEmployeesObject(departmentName, employees) {

}

The function should return an object with the following format:

{
     $departmentName: [
          $employees,
     ],
}
```

#### 12. Let's create a report object 

```
Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.

export default function createReportObject(employeesList) {

}

createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.

allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```

#### 13. Iterating through report objects 

```
Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.

This function will return an iterator to go through every employee in every department.

export default function createIteratorObject(report) {

}
```

####  14. Iterate through object 

```
Finally, write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.

 export default function iterateThroughObject(reportWithIterator) {

 }

It should return every employee name in a string, separated by |

{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};

Should return John Doe | Guillaume Salva

Reminder - the functions will be imported by the test suite.

Full example:

> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
>
```
