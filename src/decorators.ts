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

function Log(target: any, propertyName: string | Symbol){ //property decorator, takes 2 arguments
    console.log("Property decorator");
    console.log(target, propertyName);
}

function Log2(target: any, name: string |Symbol, descriptor: PropertyDescriptor){ //accessor decorator, takes 3 arguments
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){  //method decorator, takes 3 arguments
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name /*of method this parameter is in*/: string | Symbol, position: number) {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log            //property decorator
    title: string;
    private _price: number;

    @Log2           //accessor decorator
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price");
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @Log3         //metod decorator
    getPriceWithTax(@Log4 tax: number){ //parameter decorator
        return this._price * (1+tax);
    }
}