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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); //calls the constractor of the base class (of Department). At least one super call must be in the function body of derived class (ITDepartment in this case)
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, payrolls) {
        super(id, "Acounting");
        this.payrolls = payrolls;
    }
    addPayrolls(numbers) {
        this.payrolls.push(numbers);
    }
    printPayrolls() {
        console.log(this.payrolls);
    }
}
const accounting = new AccountingDepartment(5, []);
const it = new ITDepartment(3, ['John, Mary, Edward']);
accounting.addEmployee('Eva');
accounting.addEmployee('Max');
accounting.addEmployee('Anna');
it.addEmployee('John');
it.addEmployee('Mary');
it.addEmployee('Adward');
accounting.describe();
accounting.printEmployeeInfo();
it.describe();
it.printEmployeeInfo();
accounting.addPayrolls(35);
accounting.printPayrolls();
