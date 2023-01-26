class Employee {
    constructor(input){
        this.name = input.name,
        this.id = input.id,
        this.email = input.email,
        }

     getName(){
        return this.name;
     }
     getID(){
        return this.id;
     }     
     getEmail(){
        return this.email;
     }     
     getRole(){
        return 'Employee';
     }
}

module.exports = Employee