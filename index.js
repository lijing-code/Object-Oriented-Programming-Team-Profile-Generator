const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { generateManager, generateEngineer, generateIntern, htmlHeadPart, htmlTailPart} = require('./dist/script');

// Make a new array to store all the partial of index.html
const employeeArray = [htmlHeadPart];

//Build the manager information
function init(){
  console.log(`Please build your team`);
  inquirer
  .prompt([
    {
      type:'input',
      name:'name',
      message:'What is the team manager\'s name?'
    },
    {
      type:'input',
      name:'id',
      message:'What is the team manager\'s id?'
    },
    {
      type:'input',
      name:'email',
      message:'What is the team manager\'s email?'
    },
    {
      type:'input',
      name:'officeNumber',
      message:'What is the team manager\'s office number?'
    },
  ])
  .then((answer)=>{
    // Save the answer in an array called manager
    const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
    // Generate partial HTML and push it in array
    employeeArray.push(generateManager(manager));
    // Ask the user to add a new employee
    addNewEmployee()  
  })
}

// Build engineer information
const addNewEngineer = ()=>{
  inquirer
    .prompt([
      {
        type:'input',
        name:'name',
        message:'What is your engineer\'s name?'
      },
      {
        type:'input',
        name:'id',
        message:'What is your engineer\'s id?'
      },
      {
        type:'input',
        name:'email',
        message:'What is your engineer\'s email?'
      },
      {
        type:'input',
        name:'GitHub',
        message:'What is your engineer\'s GitHub username?'
      },
    ])
    .then((answer)=>{
      // Save the answer in an array called engineer
      const engineer = new Engineer(answer.name, answer.id, answer.email, answer.GitHub);
          // Generate partial HTML and push it in array
      employeeArray.push(generateEngineer(engineer));
      // Ask the user to add a new employee
      addNewEmployee()  
    })
};

// Build intern inforamtion
const addNewIntern = () =>{
  inquirer
    .prompt([
      {
        type:'input',
        name:'name',
        message:'What is your intern\'s name?'
      },
      {
        type:'input',
        name:'id',
        message:'What is your intern\'s id?'
      },
      {
        type:'input',
        name:'email',
        message:'What is your intern\'s email?'
      },
      {
        type:'input',
        name:'school',
        message:'What is your intern\'s school name?'
      },
    ])
    .then((answer)=>{
      // Save the answer in an array called intern
      const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
      // Generate partial HTML and push it in array
      employeeArray.push(generateIntern(intern));
      // Ask the user to add a new employee
      addNewEmployee() 
    })

};

// Ask the user to add a new employee information
const addNewEmployee = () =>{
  inquirer
    .prompt([
      {
        type:'list',
        name:'addEmployee',
        message:'Which type of team member would you like to add?',
        choices:['Engineer','Intern','I don\'t want to add any more team members']
      }
    ])
    .then((answer)=>{
      if(answer.addEmployee == 'Engineer'){
        addNewEngineer()
      }else if(answer.addEmployee == 'Intern'){
        addNewIntern()
      }else if(answer.addEmployee == 'I don\'t want to add any more team members'){
        employeeArray.push(htmlTailPart);
        // Transfer employeeArray to a string
        fs.writeFile('./dist/index.html', employeeArray.join('\n'), err=>{
          err? console.error(err) : console.log('Your team profile is generated successfully!')
        })
      }
    })
};


init()
