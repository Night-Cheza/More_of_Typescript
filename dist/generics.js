"use strict";
// Generic functions and constraints
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merjedObj = merge({ name: "Vikki", hobbies: ["Reading"] }, { age: 25 });
console.log(merjedObj.age);
function CountAndDiscribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + "elements";
    }
    return [element, descriptionText];
}
console.log(CountAndDiscribe("Hi there"));
//keyof
function extractAndConvert(obj, key) {
    return "Value: " + obj[key]; //[] - to access property on object - js
}
extractAndConvert({ name: "Max" }, "name");
//Generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Gorik");
textStorage.addItem("Jinn");
textStorage.removeItem("Gorik");
console.log(textStorage.getItems());
