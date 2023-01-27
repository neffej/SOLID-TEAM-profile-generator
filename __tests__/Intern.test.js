const Intern = require('../lib/Intern')
 

describe('Intern', () => {

    describe('Intern object instantiation', () => {
        // Positive Test
        it('should take in 3 parameters and create an object representing those parameters and return a Role of "Intern"', ()=>{
            // Arrange
            const object = new Intern ('gerald', 23, 'gerald@gerald.com', 'SUNY Stonybrook');

            expect(new Intern()).toBeInstanceOf(Intern);
            expect(object.name).toEqual('gerald');
            expect(object.id).toEqual(23);
            expect(object.email).toEqual('gerald@gerald.com');
            expect(object.school).toEqual('SUNY Stonybrook');

        })
    })

    describe("getName", () => {
        it("should return an object's name property", () => {
            const object = new Intern ('gerald', 23, 'gerald@gerald.com', 'SUNY Stonybrook');

            expect(object.getName()).toEqual('gerald');
        })
    })

    describe("getID", () => {
        it("should return an object's ID property", () => {
            const object = new Intern ('gerald', 23, 'gerald@gerald.com', 'SUNY Stonybrook');

            expect(object.getID()).toEqual(23);
        })
    })

    describe("getEmail", () => {
        it("should return an object's email property", () => {
            const object = new Intern ('gerald', 23, 'gerald@gerald.com', 'SUNY Stonybrook');

            expect(object.getEmail()).toEqual('gerald@gerald.com');
        })
    })

    describe("getOfficeNumber", () => {
        it("should return an object's OfficeNumber property", () => {
            const object = new Intern ('gerald', 23, 'gerald@gerald.com', 'SUNY Stonybrook');

            expect(object.getSchool()).toEqual('SUNY Stonybrook');
        })
    })

    describe("getRole", () => {
        it("should return an object's Role property", () => {
            const object = new Intern ('gerald', 23, 'gerald@gerald.com', 'SUNY Stonybrook');

            expect(object.getRole()).toEqual('Intern');
        })
    })

    describe("Intern negative testing", () => {
        it("should return an error when no parameters are passed into new Intern argument", () => {
            const object = new Intern();

            expect(object.getName()).toBeUndefined()
        })
    })
})