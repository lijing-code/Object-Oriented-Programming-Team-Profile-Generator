// SETUP

// 1. npm init a package.json to hold your dependencies
// 2. npm install inquirer and jest and anything else you'll need
// 3. Basic file setup (classes in lib, tests in a test folder, .gitignore)

// Coding the flow of our application

// Initial messaging (building the manager)
// inquirer prompt to build the manager
  // have a variable on your index.js, array of employees
  // when done asking those questions:
    // pass the answers to our Manager class
    // take the object and stick it in an array
  // inside the .then
    // call another inquirer.prompt (anotherEmployeePrompt)

// Engineer messaging (building the engineer)
  // SAME AS ABOVE EXCEPT USE ENGINEER CLASS

// Intern messaging (building the Intern)
  // SAME AS ABOVE EXCEPT USE INTERN CLASS
  [name, id, email] ...commonQuestions, managerQuestion

  function anotherEmployeePrompt() {
    inquirer.prompt([
      {
        text: "Do you want to add another employee?"
      }
    ])
    .then(() => {
      // if they pick engineer, ask them engineer questions
      // if intern, ask intern questions
      // if nothing write the file, call another function passing the array of employees
    })
  }
  
  // Manager Class
    // require the employee class to extend it
    // PROPERTIES
      // phone
  
  // Employee Class
    // PROPERTIES
      // name private
      // id
      // email
    // METHODS
      // getName() {
      //    return this.name;
      // }
  
      // employee.name = 'Michael'