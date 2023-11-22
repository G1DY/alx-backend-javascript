/* eslint-disable no-unused-vars */
// class appcontroller
// returns a 200 status and the message Hello Holberton School!
class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
