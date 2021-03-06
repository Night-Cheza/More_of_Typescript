"use strict";
//Intersection Types
const e1 = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
};
//Type Guards
function compute(a, b) {
    if (typeof a === "string" || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(employee) {
    console.log("Name: " + employee.name);
    if ('privileges' in employee) {
        console.log("Privileges: " + employee.privileges);
    }
    if ('startDate' in employee) {
        console.log("StartDade: " + employee.startDate);
    }
}
printEmployeeInfo(e1);
printEmployeeInfo({ name: 'Anna', startDate: new Date() });
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { //check if object is based on class
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
moveAnimal({ type: "bird", flyingSpeed: 12 });
//Type Casting
const paragraph = document.querySelector('p'); // casting to TS that the element is taken from HTML file
const paragraph1 = document.getElementById('message-output');
const userInputElement = document.getElementById('user-input'); //another way to cast
userInputElement.value = "Hi there!";
const ErrorBox = {
    email: "Not a valid email",
    username: "Must start with a capital character"
};
function add2(a, b) {
    if (typeof a === "string" || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add2(1, 5);
const result1 = add2("Anne", "Johnson");
result1.split(" ");
