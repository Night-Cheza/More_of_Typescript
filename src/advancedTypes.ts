//Intersection Types

type Admin ={  //also it could be interface instead of type
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
};

type PromotedEmployee = Admin & Employee;

const e1: PromotedEmployee = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | number;

type Universal = Combinable & Numeric;

//Type Guards

function compute(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === 'string') {
        return a.toString () + b.toString()
    }
    return a+b;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInfo(employee: UnknownEmployee){
    console.log ("Name: " + employee.name);
    if ('privileges' in employee) {
        console.log ("Privileges: " + employee.privileges);
    }
    if ('startDate' in employee) {
        console.log ("StartDade: " + employee.startDate);
    }
}

printEmployeeInfo(e1);
printEmployeeInfo({name: 'Anna', startDate: new Date()});

class Car{
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log("Driving truck...");
    }
    loadCargo(amount: number) {
        console.log ("Loading cargo ..." + amount);
    }   
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) { 
    vehicle.drive();
    if (vehicle instanceof Truck) { //check if object is based on class
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

//Discriminated Unions

interface Bird {
    type: "bird"; //common property in every object that describes object
    flyingSpeed: number;
}

interface Horse {
    type: "horse"; //common property in every object that describes object. Used in our check
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) { //check properties which are available for the object
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving speed is: " + speed);
}

moveAnimal({type: "bird", flyingSpeed: 12});

//Type Casting

const paragraph = <HTMLInputElement> document.querySelector('p'); // casting to TS that the element is taken from HTML file
const paragraph1 = document.getElementById('message-output');

const userInputElement = document.getElementById('user-input')! as HTMLInputElement; //another way to cast

userInputElement.value = "Hi there!"

//Index Properties (types)

interface ErrorContainer { //container might stored universal info/form for cases that might trigger errors
    [property: string]: string; //whatever object triggers this error container has to have property as a string (ex: email, username)and value of the property is string
}

const ErrorBox: ErrorContainer ={
    email: "Not a valid email",
    username: "Must start with a capital character"
};

//Function Overload

type Combinable1 = string | number;
type Numeric1 = number | number;

type Universal1 = Combinable1 & Numeric1;

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: number, b: string): string;
function add2(a: string, b: number): string;
function add2(a: Combinable1, b: Combinable1) {
    if (typeof a === "string" || typeof b === 'string') {
        return a.toString () + b.toString();
    }
    return a+b;
}

const result = add2(1,5);
const result1 = add2("Anne", "Johnson");
result1.split(" ");