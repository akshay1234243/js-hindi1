const user = {
    username :"hitesh",
    price : 999,

    welcomeMessage :function(){
        console.log(`${this.username},welcome to website`);
      //  console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();
console.log(this);//yaha jo this he uska  context empty he kyunki yaha pe node ka koi object nhi he filal 
//browser ke ander global object window object he 




// function chai()
// {    let username ="hitesh";
//      console.log(this);
// }
// chai();



const chai =()=>{     // arrow function 
  let username ="hitesh";
      console.log(this.username);
}
chai();       





//discuss about arrow functions
//    ()=> {}   //basic syntax of arrow function 
//  const addTwo=(num1,num2) => {
//         return num1+num2;
//        }
//        console.log(addTwo(3,4));


       //there is one more form of arrow function - implicit return 
      //  const addTwo =(num1,num2) => num1+num2;
      //  console.log(addTwo(3,4));


      //  const addTwo =(num1,num2) => (num1+num2);
      //  console.log(addTwo(3,4));
       //agar apne curly braces use kiye he toh aapko return likhna padega otherwise toh aap normal case mein ya toh uske aage kuch mat lagao or ya phir you have option to use round brackets



       //incase aapko oject return karna ho toh 
       const addTwo = (num1,num2) => ({username:"hitesh"});//oject ko return karne ke liye usko parenthesis mein wrap krna must he 
          console.log(addTwo(3,4));