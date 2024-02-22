// function addTwoNumber(number1,number2){   //parameters
//     console.log(number1+number2);
// }

// function addTwoNumber(number1,number2){   
//     let result = number1 + number2;
//     return result;
//     //console.log("Hitesh");  yeh console kabhi execute nhi hoga kyunki function ki definition ka ek rule hota he ki return statement ke baad koi hi statement execute nhi hogi 
// }
//  const result = addTwoNumber(3,9);//arguments 
//  console.log("Result:",result);

 function loginUserMessage(username="Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username},just logged in`
}
//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());

function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200,400,500));

const user ={
    username:"hitesh",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}
//handleobject(user);
handleobject({
    username : "sam",
    price : 399 
})


const myNewArray = [200,400,600,800]
function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));