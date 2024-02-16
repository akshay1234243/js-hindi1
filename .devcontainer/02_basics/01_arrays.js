//array
const myArray = [0,1,2,3,4,5];
console.log(myArray);
const arr2 = new Array(1,2,3,4,5,6,7,"Shaktiman", "true","Marvel")


//Array Methods
arr2.push(9);
console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.unshift(9);//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the arrray.
console.log(arr2);
console.log(arr2.includes(10));
const newArr = arr2.join();//The join() method returns an array as a string.

//The join() method does not change the original array.

//Any separator can be specified. The default is comma (,).


console.log(newArr);
console.log(arr2);



//slice  and splice 
console.log("A",myArray);
const n1 = myArray.slice(1,4);
console.log(n1);
console.log("B",myArray);
const n2 = myArray.splice(1,4);
console.log("C",myArray);
console.log(n2);

//difference b/w slice and splice are in slice , the last value is not included and it doesnt affect the orginal array but in splice , the value is also included and it affects the original array y removing or replacing the element . 
