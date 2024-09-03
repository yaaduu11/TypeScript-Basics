
let user_name : string = 'yadu'

let userName : { name: string, age: number } = {
    name : 'yadu',
    age : 18
}

// CREATIE A INTERFACE
interface Details {
    name : string
    age : number
    salary : number | string
}

let userDetails : Details = {
    name : 'yadu',
    age : 18,
    salary : 100000
}

// CREATE A TYPE
type Address = {
    name : string
    address : string
}

let adminDetails : Address = {
    name : 'yadu',
    address : 'kerala'
}

//OPTION / UNION  METHOD
type option = {
    name : string
    age? : number
}

let option1 : option = {
    name : 'yadu',
 // age : 40     optional field
}


//CREATING FUNCTIONS 
function getUserName(userDetails : Details) : string {
    return userDetails.name
}

//NAMED TYPES
type status = string

// EG:
type StatusType = 'pendings' | 'completed'
let currentStatus : StatusType = "completed"


// FUNCTION OVERLOADING
function add(num1 : number, num2: number) : number;
function add(num1 : string, num2: string) : status;
function add(num1 : any, num2 : any) : any {
    return num1 + num2
}

add(2,2)
add('2','2')
// add([],[])  if we call like this it will be an error therefor thats why were using generics here.


// GENERICS
function getAge<T>(age: T) : T {
   return age;
}

getAge(20)
getAge('20')  // which type we are passing the argument, typescript will take that type.
// typescript automatically infer the type of the value youre passing in that function


// NULLABLE  <T>
type Nullable<T> = {
    [P in keyof T]?: T[P] | null;
};

interface User {
    name: string;
    age: number;
    email?: string;
}

type NullableUser = Nullable<User>;

const user: NullableUser = {
    name: null,
    age: null,
    email: "example@example.com",
};


// MAPPED TYPES
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};


interface Config {
    apiUrl: string;
    timeout: number;
}

const config: Readonly<Config> = {
    apiUrl: 'https://api.example.com',
    timeout: 5000
};// This will cause a TypeScript error because properties are read-only
// config.apiUrl = 'https://api.anotherexample.com'; // Error

console.log(config);