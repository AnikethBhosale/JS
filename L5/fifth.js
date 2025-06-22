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