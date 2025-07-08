// function myFunction() {
//   console.log('Hello!!!');
//   console.log('We are learning JS');
// }


// myFunction();
// myFunction();



// function myFunction(msg) {
//   // parameter --> input
//   console.log(msg);
// }

// myFunction('Hello'); // argument --> input , but at function call 



// Function -> 2 numbers, sum

// function sum(x,y){
//   console.log(x+y);
// }

// sum(5,4);


// return the sum , don't print on console

// function sum(x,y){
//   s = x+y;
//   return s ;
// }

// let val = sum(5,4);
// console.log(val);





//// ARROW FUNCTIONS //////////////

//Normal Functions

// function sum(a,b){
//   return a+b;
// }

// function mul(a,b){
//   return a*b;
// }


/// arrow function 
// const arrowSum = (a,b) => {
//   console.log(a+b);
// }

// const arrowMul = (a,b) => {
//   return (a*b);
// }

// const printHello = () => {
//   console.log("Hello");
// }




///////// Let's Practice ///////

// Q: Create a function using the "function" keyword that takes a String as an argument & return the number of vowels in the string

// function countVowels(str) {
//   let count = 0;

//   for(const char of str){
    // if(char==="a" || char==="e" || char==="i" || char==="o" || char=="u")
    // {
    //   count++;
    // }
//   }
//   return count;
// }


// Q: Create an arrow function to perform the same

// const countVowels = (str) => {
//   let count = 0;

//   for(const char of str)
//   {
//     if(char==="a" || char==="e" || char==="i" || char==="o" || char=="u")
//     {
//       count++;
//     }
//   }
//   return count;
// }


/// ForEach Loop

// let arr = [1,2,3,4,5] ; 

// arr.forEach(function printVal(val){ 
    // forEach will pass each value at each index to printVal as arguments and we need not execute the inner function , forEach automatically executes it.
//     console.log(val);
// })

// let arr = [1,2,3,4,5];

// arr.forEach((val) => {
//     console.log(val);
// })

// let arr = ["Bengaluru" , "Delhi" , "Pune"];
// for a callBack function we can make use of three parameters - 
// values (items) , index (position) , array itself
// arr.forEach((val,idx,arr) => {
//     console.log(val,idx,arr);
// })





// Let's Practice 
// Q1. For a given array of numbers , print the square of each value using the forEach loop.

// let arr = [1,2,3,4,5] ;

// arr.forEach((val)=>{
//     console.log("Square of "+val +" is "+val*val); // or val**2
// });


// other method

// let arr = [1,2,3,4,5] ;

// let calcSquare = (val) => {
//     console.log("Square of "+val +" is "+val*val); // or val**2
// }

// arr.forEach(calcSquare);



// Some more array methods. 



// map --> returns new array after some operation

// let nums = [67, 52, 39]

// nums.map((val) => {
//     console.log(val);
// });

//copy of array
// let newArray = nums.map((val) => {
//     return val;
// });

//double the values in nums and make new array
// let newArray = nums.map((val) => {
//     return val*2;
// });
// console.log(newArray);



// Filter method :
// let nums = [67, 52, 39, 48]

// let evenArray = nums.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenArray);

// let greaterThsn40 = nums.filter((val)=>{
//     return val>40;
// });
// console.log(greaterThsn40);


//Reduce method :
// let arr = [1, 2, 3, 4]
// accumulator & currentVAl are previous value and current value
// const output = arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(output);

//max val
// arr = [11, 22, 34, 14]
// let maxVal = arr.reduce((prev,curr)=>{
//     return prev>curr ? prev : curr;
// })
// console.log(maxVal);

//avg val
// arr = [10, 20, 30, 20]
// let avgVal = arr.reduce((prev,curr)=>prev+curr )  / arr.length;
// console.log(avgVal);




// Lets Practice 
// Q. We are given an array of marks of students. Filter out the marks of the students that scored 90+ . 

// let marks = [90, 87, 98, 69, 99, 88, 98, 95];
// let toppers = marks.filter((val)=>{
//     return val > 90;
// })
// console.log(toppers);




//Let's Practice 
// Q. Take a number n as input from user. Create an array of numbers from 1 to n. 
// Use reduce to find the sum of all numbers.
// Use reduce to find product of all numbers in the array.

// let n = prompt("Enter a number");
// let nums = [];
// let i;
// for(i=1;i<=n;i++){
//     nums.push(i);
// }

// let sumOfNums = nums.reduce((prev,curr)=>{
//     return prev+curr;
// })

// let factorial = nums.reduce((prev,curr)=>{
//     return prev*curr;
// })

// console.log(sumOfNums);
// console.log(factorial);