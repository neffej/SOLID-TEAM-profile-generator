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
})