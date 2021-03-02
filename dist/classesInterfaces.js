"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private name: string;
        //private id: number;
        this.employees = [];
        //this.name =n;
        //this.id = id
    }
    describe() {
        console.log('Department: ' + this.id + '.' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee); //to add a new employee to an array of employees
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department(5, 'Accounting');
accounting.addEmployee('Eva');
accounting.addEmployee('Max');
accounting.addEmployee('Anna');
accounting.describe();
accounting.printEmployeeInfo();
