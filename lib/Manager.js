const Employee = require('./Employee')

// Manager class is a child class of Employee and inherits name, id, and email
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;