//decorator

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

function Logger(logString: string) {
    console.log ("LOGGER FACTORY");
    return function(target: Function) { //decorator function
        console.log(logString);
        console.log(target);
    }; 
}

@Logger ("Loggin person")
class Person1{
    name = "Eva";

    constructor() {
    console.log("Creating a new person")
    }
}

const pers = new Person1();

console.log(pers);

//decorators and work with HTML

function WithTemplate(template: string, hookID: string) {
    console.log("TEMPLATE FACTORY");
    return function(_: Function) { // _ says to ts that I get an argument which I don't need, I'm aware I have it, but I don't use it.
       console.log("Rendering template");
       const hookElement = document.getElementById(hookID);
       if (hookElement) {
           hookElement.innerHTML = template;
       }
    }
}

@Logger("Loggin...")
@WithTemplate("<h1>A New Person Object</h1>", "app")
class Person2{
    name = "May";

    constructor() {
    console.log("Creating a new person")
    }
}

const pers2 = new Person2();

console.log(pers2);

//multiple decorators