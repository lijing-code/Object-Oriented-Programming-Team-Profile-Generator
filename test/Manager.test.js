const Manager = require('../lib/Manager');

describe("Manager Class", () => {
    describe("Test manager's name, id, email and officeNumber", () => {
        it("can get name, id, email and officeNumber", () => {
            const testName = 'Anna';
            const testId = 1;
            const testEmail = 'anna@gmail.com';
            const testOfficeNumber = '111-111-1111';
            const testManager = new Manager(testName, testId, testEmail, testOfficeNumber);

            expect(testManager.name).toEqual(testName);
            expect(testManager.id).toEqual(testId);
            expect(testManager.email).toEqual(testEmail);
            expect(testManager.officeNumber).toEqual(testOfficeNumber);

        })
    });

    describe("Test getRole()", () => {
        it("can get role as Manager", () => {
            const testManager = new Manager('Anna', 1, 'anna@gmail.com', '111-111-1111');
            expect(testManager.getRole()).toBe('Manager');
        })
    })
})