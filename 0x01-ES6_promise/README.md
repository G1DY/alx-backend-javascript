# <center>ECMAS PROMISES</center>
Promises provide a way to deal with asynchronous code that avoids the so-called "callback hell" or "pyramid of doom" by using a more structured and linear approach.In this project we learnt about this programming construct in JavaScript to handle asynchronous operations and manage callbacks in a more organized and readable way.

---

## Resources
- [Promise](https://intranet.alxswe.com/rltoken/j_0FTFbkTg42JMcAbNPOVQ)
- [JavaScript Promise: An introduction](https://intranet.alxswe.com/rltoken/2Q2LzNFokcUwpA2u3FKG6Q)
- [Await](https://intranet.alxswe.com/rltoken/UXb3S2PMBe-SLJ55isMcow)
- [Async](https://intranet.alxswe.com/rltoken/_K0C7pgEjwaIzU9RpwCb8g)
- [Throw/try](https://intranet.alxswe.com/rltoken/UTjDgvKk5l892Xslh0vqcQ)

### Learning Objectives
```
    Promises (how, why, and what)
    How to use the then, resolve, catch methods
    How to use every method of the Promise object
    Throw / Try
    The await operator
    How to use an async function
```

### Requirements
```
    All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
    Allowed editors: vi, vim, emacs, Visual Studio Code
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the js extension
    Your code will be tested using Jest and the command npm run test
    Your code will be verified against lint using ESLint
    All of your functions must be exported
```

### Setup
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
Configuration Files

Add the files below to your project directory
package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
utils.js

Use when you get to tasks requiring uploadPhoto and createUser.
Click to show/hide file contents

.eslintrc.js
Click to show/hide file contents
and…

Don’t forget to run $ npm install when you have the package.json
```

### Response Data Format
```
uploadPhoto returns a response with the format

{
  status: 200,
  body: 'photo-profile-1',
}

createUser returns a response with the format

{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

#### Project Tasks

| Task | Description |
| ---- | ----------- |
| 0. Keep every promise you make and only make promises you can keep | Return a Promise using this prototype function getResponseFromAPI() |
| 1. Don't make a promise...if you know you can't keep it | Using the prototype below, return a promise. The parameter is a boolean: getFullResponseFromAPI(success) |
| 2. Catch me if you can! | Using the function prototype: function handleResponseFromAPI(promise), Append three handlers to the function |
| 3. Handle multiple successful promises | In this file, import uploadPhoto and createUser from utils.js then Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console. note:function handleProfileSignup() |

4. Simple promise
```
Using the following prototype

function signUpUser(firstName, lastName) {
}

That returns a resolved promise with this object:

{
  firstName: value,
  lastName: value,
}
```

5. Reject the promises
```
Write and export a function named uploadPhoto. It should accept one argument fileName (string).

The function should return a Promise rejecting with an Error and the string $fileName cannot be processed

export default function uploadPhoto(filename) {

}
```

6. Handle multiple promises
```
Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.

Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
```

7. Load balancer
```
Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise).

The function should return the value returned by the promise that resolved the first.

export default function loadBalancer(chinaDownload, USDownload) {

}
```

8. Throw error / try catch
```
Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number).

When the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0. Otherwise it should return the numerator divided by the denominator.

export default function divideFunction(numerator, denominator) {

}
```

9. Throw an error
```
Write a function named guardrail that will accept one argument mathFunction (Function).

This function should create and return an array named queue.

When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message Guardrail was processed should be added to the queue.

Example:

[
  1000,
  'Guardrail was processed',
]
```

10. Await / Async
```
Import uploadPhoto and createUser from utils.js

Write an async function named asyncUploadUser that will call these two functions and return an object with the following format:

{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}

If one of the async function fails, return an empty object. Example:

{
  photo: null,
  user: null,
}
```
