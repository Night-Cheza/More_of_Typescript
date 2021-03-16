"use strict";
//decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
function Log(target, propertyName) {
    console.log("Property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name /*of method this parameter is in*/, position) {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log //property decorator
], Product.prototype, "title", void 0);
__decorate([
    Log2 //accessor decorator
], Product.prototype, "price", null);
__decorate([
    Log3 //metod decorator
    ,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
