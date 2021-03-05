interface Named {
    readonly name?: string; //no initialization; readonly something like private
    outputName?: string; //optional parameter "?" for derived classes
}

interface Greetable extends Named { // it's super clear that you want to define a structure of an object. Better than type
   greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string; //optional for class in case there is no input in constractor, then name won't be sat and it's acceptable
    age = 42; // in the class that build using interface we can add new info

    constructor(n?: string){ //we can use optional in constractors as well
        if (n){
            this.name = n;
        }        
    }

    greet(phrase:string) {
        if(this.name) {
            console.log(phrase + ' ' +this.name);
        }
        else {
            console.log("Hi there!");
        }
    }
}

let user1: Greetable; 

user1 = new Person ();
//user1.name = "Viki"; - thows a mistake because we can't rewrite readonly property once it was initialized
  
    
user1.greet("Hi there! I am");
console.log(user1);