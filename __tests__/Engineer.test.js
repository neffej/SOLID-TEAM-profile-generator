const Engineer = require('../lib/Engineer')
 

describe('Engineer', () => {

    describe('Engineer object instantiation', () => {
        // Positive Test
        it('should take in 3 parameters and create an object representing those parameters and return a Role of "Employee"', ()=>{
            // Arrange
            const object = new Engineer ('gerald', 23, 'gerald@gerald.com', 'dlareg');

            expect(new Engineer()).toBeInstanceOf(Engineer);
            expect(object.name).toEqual('gerald');
            expect(object.id).toEqual(23);
            expect(object.email).toEqual('gerald@gerald.com');
            expect(object.github).toEqual('dlareg');
        })
    })
})