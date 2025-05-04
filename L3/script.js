//console.log('Aniketh')

// for loop 1 to 5
//     initialize    stoping cond     updating
// for (let i=1 ;          i<=5 ;          i++)
// {
//   console.log('Aniketh');
// }



// sum of 1 to 5

// let sum = 0;
// for(let i=1; i<=5;i++){
//    sum += i;
// }

//console.log(i); // i is block scope variable
// but is we had used "var" it would have been a global variable and we could have accessed it
// console.log('sum is: ',sum);
// console.log('Loop has ended');


//infintie loop /// DO NOT RUN THIS CODE
// for (let i=1 ;   i<=0 ; i++)
//   {
//     console.log('Aniketh');
//   }
  


// let  i = 1 ;
// while(i<=5){
//   console.log(i);
//   i++;
// }


// do-while loop
// let i = 20;
// do {
//   console.log("Aniketh");
//   i++;
// }while(i<=20);

//for-of loop
// let str = "Aniketh";
// let size = 0;
// for(let i of str){
//   size++;
//   console.log("i :",i);
// }

// console.log('str size :',size)

// for-in loop

// let student = {
//   name : "Aniketh",
//   age : 21,
//   cgpa: 8.12,
//   isPass :true
// };

// for(let i in student){
//   console.log('i :',i);
//   console.log('student[i] :',student[i]);
// }



// Practice Problems

//Q.1 Print all even numbers from 0-100

// for(let i=0 ; i <=100 ; i+=2){
//   console.log(i);
// }

//Q.2 Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let gameNum = 25;
// let user_num ;25
// user_num = prompt('Guess the number');
// while(gameNum!=user_num){
//   user_num = prompt('Guess again');
// }

// alert(`Congratulations!!! You entered right number which is: ${user_num}`);




//Strings

let str = "Aniketh";
let str2 = 'Bhosale';

console.log(str[0]);