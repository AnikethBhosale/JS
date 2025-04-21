const student = {
  name:'n',
  age:15
}

student.name = 'a';

//console.log(student['name']);
student.t = 5;
//console.log(student);

// event with const , we can change values , this is bc we are not changing the object, but changing values , to get error we have to change address
//change entire collection to get error in const obj 
let s = {
  n : 'b',
  a : 5
}

s.t = 9;
//console.log(s);



 ///////////////////////// ---------PRACTICE --------- \\\\\\\\\\\\\\\\\\\\\\\\\


 // 1. const obj called product to store info shown in the picture.

const product = {
  name : 'Ball Pen' , //string
  rating : 4 , //number
  offer : 5 , //number
  price : 270
}

console.log(product);


// 2. const obj profile to store info shown in pic

const profile = {
  username : 'shradhakhapra',
  isFollow : true,
  follower : 234,
  following : 234
}

console.log(typeof profile['username'])