//Immediately Invoked Function Expression (IIFE)
//isko use krke do cheeze resolve hoti he ek toh harr function mein global scope hota he toh ,jo function ge woh global scope ke saath jaake pollute na ho ek toh ,aur dusra function immediately invoke hojaye
(function chai(){    //named IIFE
    console.log("DATABASE CONNECTED");
})();    // basic syntax of IIFE is: ()(),here first bracket signifies the function definition and the other one is function execution 



((name)=>{   // simple IIFE
   console.log(`DB connected Two ${name}`)
})('hitesh');