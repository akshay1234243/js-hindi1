//Date
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//for specific date
//let createdNewDate = new Date(2023,0,23,5,3); // 0 is refer to month starting 
//console.log(createdNewDate.toDateString());
//console.log(createdNewDate.toLocaleString());
let createdNewDate = new Date("2023-01-23");// in YY-MM-DD FORMAT
console.log(createdNewDate.toLocaleString());
  let myTimeStamp = Date.now();
  //console.log(myTimeStamp);
 // console.log(createdNewDate.getTime());
console.log(Math.floor(Date.now()/1000))


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default',{
    weekday : "long",
}))