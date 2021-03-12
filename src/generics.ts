// Generic functions and constraints

function merge<T extends object, U extends object>(objA: T, objB: U) { //generic function with constraints for T and U input
    return Object.assign(objA, objB); 
}

const merjedObj = merge({name: "Vikki", hobbies: ["Reading"]}, {age:25});
console.log(merjedObj.age);

interface Lengthy {
    length: number;
}

function CountAndDiscribe<T extends Lengthy>(element: T){ //constraint that we need an object that has length property
    let descriptionText = "Got no value";
    if (element.length === 1){
        descriptionText = "Got 1 element";
    } else if (element.length > 1){
        descriptionText = "Got " + element.length + "elements";
    }
    return[element, descriptionText];
}

console.log(CountAndDiscribe ("Hi there"));

//keyof

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U){
    return "Value: " + obj[key]; //[] - to access property on object - js
}

extractAndConvert({name:"Max"}, "name");

//Generic classes

class DataStorage <T> { //generic class we can call whenever we need to store any primitive type info
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item:T) {
        this.data.splice(this.data.indexOf(item), 1); //works only for primitive types, otherwise need to add extra check
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Gorik");
textStorage.addItem("Jinn");
textStorage.removeItem("Gorik");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();