"use strict";
let user_name = 'yadu';
let userName = {
    name: 'yadu',
    age: 18
};
let userDetails = {
    name: 'yadu',
    age: 18,
    salary: 100000
};
let adminDetails = {
    name: 'yadu',
    address: 'kerala'
};
let option1 = {
    name: 'yadu',
    // age : 40     optional field
};
//CREATING FUNCTIONS 
function getUserName(userDetails) {
    return userDetails.name;
}
let currentStatus = "completed";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
add('2', '2');
// add([],[])  if we call like this it will be an error therefor thats why were using generics here.
// GENERICS
function getAge(age) {
    return age;
}
getAge(20);
getAge('20'); // which type we are passing the argument, typescript will take that type.
const user = {
    name: null,
    age: null,
    email: "example@example.com",
};
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000
}; // This will cause a TypeScript error because properties are read-only
// config.apiUrl = 'https://api.anotherexample.com'; // Error
console.log(config);
