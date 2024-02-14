 //string Interpolation 
 
 const name = "hitesh";
const repoCount = 50;
console.log(`Hello , My name is ${name} and my repocount is ${repoCount}.`)


function myInfo(fname, lname, country) { 
    return `My name is ${fname} ${lname}. ${country} is my favorite country`; 
} 
console.log(myInfo("john", "doe", "India")); //In JavaScript, the template literals (strings wrapped in backticks ` `) and ${expression} as placeholders perform the string interpolation. Now we can write the above myInfo function with string interpolation


const gameName = new String('hi-te-sh-Chaud-hary');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))
const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(1,4);
console.log(anotherString);
const newStringOne ="     hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd().length);
const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('kumar'));
console.log(url.includes('hitesh'));
console.log(gameName.split('-'));

