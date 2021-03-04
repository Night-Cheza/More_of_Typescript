"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private name: string;
        //private id: number;
        this.employees = []; //protected instead of private so that it can be accessable and overwritten in inherited classes
        //this.name =n;
        //this.id = id
        //console.log(Department.fiscalYear); //way to access static method from inside of non-static function
    }
    static createEmployee(name) {
        return { name: name };
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
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); //calls the constractor of the base class (of Department). At least one super call must be in the function body of derived class (ITDepartment in this case)
        this.admins = admins;
        // this.admins = admins; //this is always used after we use super
    }
}
class AccountingDepartment extends Department {
    constructor(id, payrolls) {
        super(id, "Acounting");
        this.payrolls = payrolls;
        this.lastPayroll = payrolls[0];
    }
    get mostRecentPayroll() {
        if (this.lastPayroll) { //added a check if lastPayroll has value
            return this.lastPayroll;
        }
        throw new Error('No payroll found');
    }
    set mostRecentPayroll(value) {
        if (!value) { //check if there is value (no value)
            throw new Error("Sorry, nothing found");
        }
        this.addPayrolls(value);
    }
    describe() {
        console.log("Accounting Department ID : " + this.id);
    }
    addEmployee(name) {
        if (name === 'John') {
            return;
        }
        this.employees.push(name);
    }
    addPayrolls(numbers) {
        this.payrolls.push(numbers);
    }
    printPayrolls() {
        console.log(this.payrolls);
    }
}
const employee1 = Department.createEmployee("Andrew");
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment(3, ['John, Mary, Edward']);
it.addEmployee('John');
it.addEmployee('Mary');
it.addEmployee('Edward');
it.describe();
it.printEmployeeInfo();
console.log(it);
const accounting = new AccountingDepartment(5, []);
accounting.describe();
accounting.addEmployee('Eva');
accounting.addEmployee('Max');
accounting.addEmployee('Anna');
accounting.addEmployee('Kathleen');
accounting.printEmployeeInfo();
//accounting.addPayrolls(35);
//accounting.mostRecentPayroll = 112;
//accounting.printPayrolls();
console.log(accounting);
console.log(accounting.mostRecentPayroll);
