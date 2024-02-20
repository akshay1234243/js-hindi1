//const tinderUser = new Object();
const tinderUser = {}  // both objects declaration are same but only the difference is 1) one is singleton object and other is non-singleton object 

tinderUser.id= "123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"hitesh",
            lastName:"chaudhary",
        }
    }
}
console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstName);
// console.log(regularUser.fullname.userfullname.lastName);


const obj1={
    1 : "a", 2:"b"
}
const obj2= {
    3:"c" , 4:"d"
}
//const obj3 = Object.assign({},obj1,obj2);//minimal use
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email:"h1@gmail.com",
    },
    {
        id:2,
        email:"h2@gmail.com"
    },
    {
        id:3,
        email:"h3@gmail.com"
    },
    {
        id:4,
        email:"h4@gmail.com"
    }
]
users[1].email;

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//object-destructuring  Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.
// Destructuring allows us to extract multiple properties, or items, from an array​ at a time.
const course = {
    courseName : "JS-Hindi",
    coursePrice : 999,
    courseInstructor : "Hitesh",
    courseLearningMode :"online"
}
 //course.courseInstructor   // old way of syntax 
 const{courseInstructor:instructor} = course;//humm courseInstructor ko apne hisab se bhi naam de sakte he incase kisi ko yeh key name thoda lamba lag rha he using semicolon
 console.log(instructor);
//JSON-API
// {
//     "courseName" : "JS-Hindi",
//     "coursePrice" : "free",
//     "courseInstructor" : "Hitesh",
//     "courseLearningMode" :"offline"
// } // also a way to declare objects 
[
    {},
    {},
    {}
] //also a way to declare objects in array form