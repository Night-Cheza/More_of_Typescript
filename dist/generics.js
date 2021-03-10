"use strict";
// Generics and constraints
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merjedObj = merge({ name: "Vikki", hobbies: ["Reading"] }, { age: 25 });
console.log(merjedObj.age);
