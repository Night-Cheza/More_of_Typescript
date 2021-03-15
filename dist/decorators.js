"use strict";
//decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* function Logger(target: Function){
    console.log("Loggin...");
    console.log(target);
}

@Logger
class Person1{
    name = "Eva";

    constructor() {
    console.log("Creating a new person")
    }
}

const pers = new Person1();

console.log(pers); */
//decorator factory
function Logger(logString) {
    console.log("LOGGER FACTORY");
    return function (target) {
        console.log(logString);
        console.log(target);
    };
}
let Person1 = class Person1 {
    constructor() {
        this.name = "Eva";
        console.log("Creating a new person");
    }
};
Person1 = __decorate([
    Logger("Loggin person")
], Person1);
const pers = new Person1();
console.log(pers);
//decorators and work with HTML
function WithTemplate(template, hookID) {
    console.log("TEMPLATE FACTORY");
    return function (_) {
        console.log("Rendering template");
        const hookElement = document.getElementById(hookID);
        if (hookElement) {
            hookElement.innerHTML = template;
        }
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "May";
        console.log("Creating a new person");
    }
};
Person2 = __decorate([
    Logger("Loggin..."),
    WithTemplate("<h1>A New Person Object</h1>", "app")
], Person2);
const pers2 = new Person2();
console.log(pers2);
//multiple decorators
