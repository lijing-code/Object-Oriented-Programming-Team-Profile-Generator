const Engineer = require('../lib/Engineer');

describe("Engineer Class", () => {
    describe("Test Engineer's name, id, email and GitHub username", () => {
        it("can get name, id, email and GitHub username", () => {
            const testName = 'Anna';
            const testId = 1;
            const testEmail = 'anna@gmail.com';
            const testGitHub = 'anna-code';
            const testEngineer = new Engineer(testName, testId, testEmail, testGitHub);

            expect(testEngineer.name).toEqual(testName);
            expect(testEngineer.id).toEqual(testId);
            expect(testEngineer.email).toEqual(testEmail);
            expect(testEngineer.GitHub).toEqual(testGitHub);

        })
    });

    describe("Test getGithub()", () => {
        it("can get role as Engineer", () => {
            const testEngineer = new Engineer('Anna', 1, 'anna@gmail.com', 'anna-code');
            expect(testEngineer.getGithub()).toBe('anna-code');
        })
    })

    describe("Test getRole()", () => {
        it("can get role as Engineer", () => {
            const testEngineer = new Engineer('Anna', 1, 'anna@gmail.com', 'anna-code');
            expect(testEngineer.getRole()).toBe('Engineer');
        })
    })
})