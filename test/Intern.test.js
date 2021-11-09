const Intern = require('../lib/Intern');

describe("Intern Class", () => {
    describe("Test Intern's name, id, email and school", () => {
        it("can get name, id, email and school", () => {
            const testName = 'Anna';
            const testId = 1;
            const testEmail = 'anna@gmail.com';
            const testSchool = 'GeorgiaTech';
            const testIntern = new Intern(testName, testId, testEmail, testSchool);

            expect(testIntern.name).toEqual(testName);
            expect(testIntern.id).toEqual(testId);
            expect(testIntern.email).toEqual(testEmail);
            expect(testIntern.school).toEqual(testSchool);

        })
    });

    describe("Test getSchool()", () => {
        it("can get school as Intern", () => {
            const testIntern = new Intern('Anna', 1, 'anna@gmail.com', 'GeorgiaTech');
            expect(testIntern.getSchool()).toBe('GeorgiaTech');
        })
    })

    describe("Test getRole()", () => {
        it("can get role as Intern", () => {
            const testIntern = new Intern('Anna', 1, 'anna@gmail.com', 'GeorgiaTech');
            expect(testIntern.getRole()).toBe('Intern');
        })
    })
})