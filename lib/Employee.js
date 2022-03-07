class Employee {
    constructor( name , id, email){

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;

    }
    getEmployee(){
        return this.getName() +  this.getName() + this.getEmail();
    }
}

module.exports = Employee;