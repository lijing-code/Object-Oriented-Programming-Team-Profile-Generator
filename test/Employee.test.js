const Employee = require('../lib/Employee');

describe("Employee Class", () => {
    describe("getName",() => {
        it("can get name", () =>{
            const testName = 'Anna';
            const result = new Employee(testName, 1, 'anna@gmail.com');
            expect(result.getName()).toEqual(testName)
        })   
    });
    describe("getId",() => {
        it("can get id", () =>{
            const testId = 1;
            const result = new Employee('Anna', testId, 'anna@gmail.com');
            expect(result.getId()).toEqual(testId)
        })   
    });
    describe("getEmail",() => {
        it("can get email", () =>{
            const testEmail = 'anna@gmail.com';
            const result = new Employee('Anna', 1, testEmail);
            expect(result.getEmail()).toEqual(testEmail)
        })   
    });
    describe("getRole",() => {
        it("can get role", () =>{
            const testRole = 'Employee';
            const result = new Employee('Anna', 1, 'anna@gmail.com');
            expect(result.getRole()).toEqual(testRole)
        })   
    });
    
})

