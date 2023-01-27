const Manager = require('../lib/Manager')
 

describe('Manager', () => {

    describe('Manager object instantiation', () => {
        // Positive Test
        it('should take in 4 parameters and create an object representing those parameters and return a Role of "Employee"', ()=>{
            // Arrange
            const object = new Manager ('gerald', 23, 'gerald@gerald.com', 1);

            expect(new Manager()).toBeInstanceOf(Manager);
            expect(object.name).toEqual('gerald');
            expect(object.id).toEqual(23);
            expect(object.email).toEqual('gerald@gerald.com');
            expect(object.officeNumber).toEqual(1);
        })
    })

    describe("getName", () => {
        it("should return an object's name property", () => {
            const object = new Manager ('gerald', 23, 'gerald@gerald.com', 1);

            expect(object.getName()).toEqual('gerald');
        })
    })

    describe("getID", () => {
        it("should return an object's ID property", () => {
            const object = new Manager ('gerald', 23, 'gerald@gerald.com', 1);

            expect(object.getID()).toEqual(23);
        })
    })

    describe("getEmail", () => {
        it("should return an object's email property", () => {
            const object = new Manager ('gerald', 23, 'gerald@gerald.com', 1);

            expect(object.getEmail()).toEqual('gerald@gerald.com');
        })
    })

    describe("getOfficeNumber", () => {
        it("should return an object's OfficeNumber property", () => {
            const object = new Manager ('gerald', 23, 'gerald@gerald.com', 1);

            expect(object.getOfficeNumber()).toEqual(1);
        })
    })

    describe("getRole", () => {
        it("should return an object's Role property", () => {
            const object = new Manager ('gerald', 23, 'gerald@gerald.com', 1);

            expect(object.getRole()).toEqual('Manager');
        })
    })

    describe("Manager negative testing", () => {
        it("should return an error when no parameters are passed into new Manager argument", () => {
            const object = new Manager();

            expect(object.getName()).toBeUndefined()
        })
    })
})