//arrow functions

/* const add = (a: number, b: number) => a+b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event =>console.log(event));
}

printOutput(add(3,8)); */

//set default arguments

const summ = (x: number, y: number = 1) => x+y;    //y is set by default

const printOutput1: (x: number | string) => void = output => console.log(output);


printOutput1(summ(7));

//spread operator and rest parameters

const hobbies = ["Cooking", "Walking", "Reading"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
    FirstName: "Helga",
    age: 23
};

const copyOfPerson = {...person};



const add1 = (...numbers: number []) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);

};

const addedNumbers = add1(2,8,15,7,30);
console.log(addedNumbers);

//array and object destructuring

const [hobby1, hobby2, ...restHobbies] = hobbies;

console.log(hobby1, hobby2);

const {FirstName: userName, age} = person;

console.log(userName, age);