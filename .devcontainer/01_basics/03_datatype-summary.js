//Primitive
//7 types- String , Number, booleamn ,null , undefined, symbol ,BigInt
//Reference-type(non- primitive)
// Array , objects, functions 
// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn =true;
// const outsideTemp =null;
// let userEmail;
// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId)

// const heroes = ["shaktiman", "Batman", "Nagaaz"];
// console.log(heroes);
// let myObj= {
//     name: "Ajay",
//     roll_number: 2,
//     age: 22,
// }
// console.log( typeof myObj);
// const myFunc = function(){
//     console.log("Hello-world");
// }
// console.log(typeof myFunc);





// +++++++++++++++++++++++++++++++++++++++++++++++++++ Stack and Heap Memory ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack (Primitive)  and Heap (Non-Primitive)
let myYoutubeName = "HiteshChaudhary";
let anotherName = myYoutubeName;
anotherName = "chaiaurcode";
console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email_id: "user1@gmail.com",
    upi : "user1@ybl",
}
let userTwo = userOne;
userTwo.email = "user2@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

// stack ke ander aapko values ki copy milti he( copy value kabhi original nhi hoti) but in heap aapko reference value milti he (matlb ki original value hi milti he)