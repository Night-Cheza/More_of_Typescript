function Logger(target: Function){
    console.log("Loggin...");
    console.log(target);
}

@Logger
class Person1{
    name = "Max";

    constructor() {
    console.log("Creating a new person")
    }
}

const pers = new Person1();

console.log(pers);