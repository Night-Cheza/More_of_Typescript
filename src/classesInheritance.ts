class Department {
    //private name: string;
    //private id: number;
    private employees:string[] = [];

    constructor(private readonly id: number, public name: string) {
        //this.name =n;
        //this.id = id
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
         this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: number, private payrolls: number[]) {
        super(id, "Acounting");
    }

    addPayrolls(numbers: number) {
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

