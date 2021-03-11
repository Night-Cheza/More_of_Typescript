"use strict";
// Generics and constraints
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
