//Intersection Types

type Admin ={  //also it could be interface instead of type
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
};

type PromotedEmployee = Admin & Employee;

const e1: PromotedEmployee = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | number;

type Universal = Combinable & Numeric;