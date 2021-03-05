"use strict";
class Person {
    constructor(n) {
        this.age = 42; // in the class that build using interface we can add new info
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log("Hi there!");
        }
    }
}
let user1;
user1 = new Person();
//user1.name = "Viki"; - thows a mistake because we can't rewrite readonly property once it was initialized
user1.greet("Hi there! I am");
console.log(user1);
