// Generics and constraints

function merge<T extends object, U extends object>(objA: T, objB: U) { //generic function with constraints for T and U input
    return Object.assign(objA, objB); 
}

const merjedObj = merge({name: "Vikki", hobbies: ["Reading"]}, {age:25});
console.log(merjedObj.age);