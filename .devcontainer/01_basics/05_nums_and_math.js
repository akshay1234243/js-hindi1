// const score = 100;
// console.log(score);
// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));
// const otherNumber = 123.896;
// console.log(otherNumber.toPrecision(3));
// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));




//888888888888888888888888888888888888888888888888------MATHS------88888888888888888888888888888888888888888888

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.43));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.6));
// console.log(Math.sqrt(49));
console.log(Math.random())//Math.random value exist only in between 0 and 1 
//for avoiding this range of 0 and 1 , we have to multiply y any of tens, hundreds annd thousands ,basically it depends on situation 
console.log(Math.floor(Math.random()*10) +1)//adding 1 in this value means we won't 0 value 
const min =10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min + 1))+min)