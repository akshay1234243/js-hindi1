//SINGLETON  is a design pattern .Singleton class should be one which:
//A)Ensures that it creates only one instance of the class
//B)Provides a global access point to the state.
//C)Makes sure that the instance is only created the first time.

const mySym = Symbol("key1");//symbol declaration 

//OBJECT LITERALS
const JsUser = {
    name : "Hitesh",
    "fullName" : "Hitesh Chaudhary" , 
     [mySym] : "mykey1",
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false , 
    lastLoginDays : ["Monday" , "Saturday"],
}

console.log(JsUser["email"]);
console.log(JsUser[mySym]);
JsUser.email ="hiteshchaudhary24@gmail.com"
//Object.freeze(JsUser);
//JsUser.email ="hitesh25@gmail.com"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello user to enter in the JS_World")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS_User ,  ${this.name}`)
}

console.log(JsUser. greetings());
console.log(JsUser.greetingTwo());

