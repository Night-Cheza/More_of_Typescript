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

const accounting = new Department(5, 'Accounting')

accounting.addEmployee('Eva');
accounting.addEmployee('Max');
accounting.addEmployee('Anna');

accounting.describe(); 
accounting.printEmployeeInfo();

