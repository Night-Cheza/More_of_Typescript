// Generics and constraints

function merge<T extends object, U extends object>(objA: T, objB: U) { //generic function with constraints for T and U input
    return Object.assign(objA, objB); 
}

const merjedObj = merge({name: "Vikki", hobbies: ["Reading"]}, {age:25});
console.log(merjedObj.age);

interface Lengthy {
    length: number;
}

function CountAndDiscribe<T extends Lengthy>(element: T){
    let descriptionText = "Got no value";
    if (element.length === 1){
        descriptionText = "Got 1 element";
    } else if (element.length > 1){
        descriptionText = "Got " + element.length + "elements";
    }
    return[element, descriptionText];
}

console.log(CountAndDiscribe ("Hi there"));
