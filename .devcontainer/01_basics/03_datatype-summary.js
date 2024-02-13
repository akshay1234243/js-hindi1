//Primitive
//7 types- String , Number, booleamn ,null , undefined, symbol ,BigInt
//Reference-type(non- primitive)
// Array , objects, functions 
const score = 100;
const scoreValue = 100.3;
const isLoggedIn =true;
const outsideTemp =null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId)

const heroes = ["shaktiman", "Batman", "Nagaaz"];
console.log(heroes);
let myObj= {
    name: "Ajay",
    roll_number: 2,
    age: 22,
}
console.log( typeof myObj);
const myFunc = function(){
    console.log("Hello-world");
}
console.log(typeof myFunc);