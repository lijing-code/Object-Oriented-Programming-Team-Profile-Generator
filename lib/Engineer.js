const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, GitHub){
        super(name, id, email);
        //add GitHub username
        this.GitHub = GitHub
    }
    getGithub(){
        return this.GitHub;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;