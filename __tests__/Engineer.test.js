const Engineer = require('../lib/Engineer')
 

describe('Engineer', () => {

    describe('Engineer object instantiation', () => {
        it('should take in 3 parameters and create an object representing those parameters and return a Role of "Engineer"', ()=>{
            // Arrange
            const object = new Engineer ('gerald', 23, 'gerald@gerald.com', 'dlareg');

            expect(new Engineer()).toBeInstanceOf(Engineer);
            expect(object.name).toEqual('gerald');
            expect(object.id).toEqual(23);
            expect(object.email).toEqual('gerald@gerald.com');
            expect(object.github).toEqual('dlareg');
        })
    })

    describe("getName", () => {
        it("should return an object's name property", () => {
            const object = new Engineer ('gerald', 23, 'gerald@gerald.com', 'dlareg');

            expect(object.getName()).toEqual('gerald');
        })
    })

    describe("getID", () => {
        it("should return an object's ID property", () => {
            const object = new Engineer ('gerald', 23, 'gerald@gerald.com', 'dlareg');

            expect(object.getID()).toEqual(23);
        })
    })

    describe("getEmail", () => {
        it("should return an object's email property", () => {
            const object = new Engineer ('gerald', 23, 'gerald@gerald.com', 'dlareg');

            expect(object.getEmail()).toEqual('gerald@gerald.com');
        })
    })

    describe("getOfficeNumber", () => {
        it("should return an object's OfficeNumber property", () => {
            const object = new Engineer ('gerald', 23, 'gerald@gerald.com', 'dlareg');

            expect(object.getGithub()).toEqual('dlareg');
        })
    })

    describe("getRole", () => {
        it("should return an object's Role property", () => {
            const object = new Engineer ('gerald', 23, 'gerald@gerald.com', 'dlareg');

            expect(object.getRole()).toEqual('Engineer');
        })
    })

    describe("Engineer negative testing", () => {
        it("should return an error when no parameters are passed into new Engineer argument", () => {
            const object = new Engineer();

            expect(object.getName()).toBeUndefined()
        })
    })
})