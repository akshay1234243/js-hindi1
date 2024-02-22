let a =300
if(true){
    let a =10
    const b =20
    console.log("INNER:",a);
}
console.log(a);
//console.log(b);
//var is rare to use ecause it is globally-scoped whereas let and const are block or function-scoped


function one(){
    const username = "hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two();
}
one();



if(true){
    const username ="hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++++++++++++++ interesting+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num+1;
}
//addone() can be accessed and have output of 6
console.log(addtwo(7));
const addtwo =function(num){
    return num+2;
}//cannot access addtwo() function before intialization ,this is called hoisting 
