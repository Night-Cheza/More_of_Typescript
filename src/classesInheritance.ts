class Department {

    static fiscalYear = 2020;
    //private name: string;
    //private id: number;
    protected employees:string[] = []; //protected instead of private so that it can be accessable and overwritten in inherited classes

    constructor(protected readonly id: number, public name: string) { //instead of writing 2 and 3 row, we can initialize those in constructor
        //this.name =n;
        //this.id = id
        //console.log(Department.fiscalYear); //way to access static method from inside of non-static function
    }
    static createEmployee(name: string){
        return{name:name};
    }

    describe(this: Department) {
        console.log('Department: ' + this.id + '.' + this.name);
    }

    addEmployee(employee:string) {
        this.employees.push(employee); //to add a new employee to an array of employees
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}



class ITDepartment extends Department { //class ITDepartment inherits everything from class Department
        constructor(id: number, public admins: string[]) { //we can create our own constractor for class ITDepartment that shows what exactly we want to inherit
         super(id, 'IT'); //calls the constractor of the base class (of Department). At least one super call must be in the function body of derived class (ITDepartment in this case)
        // this.admins = admins; //this is always used after we use super
    }
}

class AccountingDepartment extends Department {
    private lastPayroll: number;

    get mostRecentPayroll(){ //use get to retrieve a value of unaccessable (private) property
        if (this.lastPayroll) { //added a check if lastPayroll has value
            return this.lastPayroll;
        }
        throw new Error('No payroll found');
    }

    set mostRecentPayroll(value: number) {
        if (!value) { //check if there is value (no value)
            throw new Error ("Sorry, nothing found");
        }
        this.addPayrolls(value);
    }

    constructor(id: number, private payrolls: number[]) {
        super(id, "Acounting");
        this.lastPayroll = payrolls[0]
    }

    describe() {
        console.log("Department: Accounting. ID: " +this.id);
    }

    addEmployee (name: string) {
        if (name === 'John') {
           return;
        }
        this.employees.push(name);
    }

    addPayrolls(numbers: number) {
        this.payrolls.push(numbers);
    }

    printPayrolls() {
        console.log(this.payrolls);
    }
}

const employee1 = Department.createEmployee ("Andrew");
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

