const marvel_heroes = ["Thor","spiderman","Ironman"];
const dc_heroes = ["superman","Batman","flash"];
//marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);
// const n3= marvel_heroes.concat(dc_heroes);
// console.log(n3);//push method return on existing array but concat method return on new array,
                // concat method is slower than push method 
const all_new_heroes = [...marvel_heroes,...dc_heroes];//spread operator
console.log(all_new_heroes);



const other_array = [1,2,3,4,5,6,[4,5,6],7,8,[6,7,8,[9,10]]];
const real_other_array = other_array.flat(Infinity);
console.log(real_other_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));//interestingf point for interview purpose  as a key-value pair

let score1= 100;
let score2= 200;
let score3= 300;
let score4= 400;
console.log(Array.of(score1,score2,score3,score4));