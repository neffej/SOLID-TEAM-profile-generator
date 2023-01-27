const Employee = require('../lib/Employee')
 

describe('Employee', () => {

    describe('Employee object instantiation', () => {
        // Positive Test
        it('should take in 3 parameters and create an object representing those parameters and return a Role of "Employee"', ()=>{
            // Arrange
            const object = new Employee ('gerald', 23, 'gerald@gerald.com');

            expect(new Employee()).toBeInstanceOf(Employee);
            expect(object.name).toEqual('gerald');
            expect(object.id).toEqual(23);
            expect(object.email).toEqual('gerald@gerald.com');
        })
    })

    describe("getName", () => {
        it("should return an object's name property", () => {
            const object = new Employee ('gerald', 23, 'gerald@gerald.com');

            expect(object.getName()).toEqual('gerald');
        })
    })

    describe("getID", () => {
        it("should return an object's ID property", () => {
            const object = new Employee ('gerald', 23, 'gerald@gerald.com');

            expect(object.getID()).toEqual(23);
        })
    })

    describe("getEmail", () => {
        it("should return an object's email property", () => {
            const object = new Employee ('gerald', 23, 'gerald@gerald.com');

            expect(object.getEmail()).toEqual('gerald@gerald.com');
        })
    })

    describe("getRole", () => {
        it("should return an object's Role property", () => {
            const object = new Employee ('gerald', 23, 'gerald@gerald.com');

            expect(object.getRole()).toEqual('Employee');
        })
    })

    describe("Employee negative testing", () => {
        it("should return an error when no parameters are passed into new Employee argument", () => {
            const object = new Employee();

            expect(object.getName()).toBeUndefined()
        })
    })


})