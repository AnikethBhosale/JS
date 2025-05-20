// let marks1 = 50;
// let marks2 = 90;
// let marks = {
//   stu1:42,
//   stu2:95
// } ;
// not ideal to make multiple variables for many students

// But for array we need to make only one variable , where position(index) matters

// creating arrays
// let marks = [45, 68, 99];
// console.log(marks);
// console.log(marks.length); // length is a property not a method

//console.log(marks[1]);
//marks[1] = 94;
//console.log(marks);
//console.log(marks[1]);

// let arr_len = marks.length;
// for (let i=0 ; i<arr_len;i++){
//   console.log(marks[i]);
// }


// for(let ele of marks){
//   console.log(ele,' ele');
// }


// PRACTICE QUESTION

// AVERAGE MARKS 
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for(let ele of marks){
//   sum += ele;
// }
// let avg = (sum / marks.length);
// console.log(`Average marks: ${avg}`);


// 5 items and all have 10% off
// let prices = [250, 645, 300, 900, 50];

// for(let i=0; i<prices.length ;i++){
//   let offer = prices[i]/10;
//   let new_price = prices[i]-offer;
//   prices[i] = new_price;
// }

// console.log(prices);

// for(let i=0; i<prices.length ;i++){
//   let offer = prices[i]/10;
//   prices[i] -= offer;
// }

// console.log(prices);



// Array Methods
// let foodItems = ['potato' , 'apple' , 'litchi' , 'tomato'];
// console.log(foodItems);

// foodItems.push('chips');
// console.log(foodItems);

// let poped_item = foodItems.pop();
// foodItems.pop();
// console.log(foodItems);
// console.log(poped_item);

// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);  // original array stays intact , though a string is returned when toString() is used .


// let marvel_heroes = ['thor' , 'spiderman' , 'ironman'];
// let dc_heroes = ['batman' , 'superman'];
// let indian_heroes = ['shaktiman'];
// let heroes = marvel_heroes.concat(dc_heroes,indian_heroes);
// console.log(heroes);


// let marvel_heroes = ['thor' , 'spiderman' , 'ironman' , 'antman' , 'dr.strange'];

// console.log(marvel_heroes.slice(1,3));
// console.log(marvel_heroes.slice(1));
// console.log(marvel_heroes.slice());

// marvel_heroes.splice(2,2);
// console.log(marvel_heroes); // delete 2 elemets at index 2,3

// marvel_heroes.splice(2,2,'captainamerica','blackwidow');
// console.log(marvel_heroes); // delete and replace 2 elements at index 2,3

// marvel_heroes.splice(2,0,'captainamerica');
// console.log(marvel_heroes); // add element at some index (here: at index 2)

// marvel_heroes.splice(3);
// console.log(marvel_heroes); // delete all elements from given index(inclusive)

// marvel_heroes.splice();
// console.log(marvel_heroes); // nothing gets deleted .




// Let's Practice
//To manipulate the given array of companies as requested, the following steps can be taken:

//Original Array:
//["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

//a. Remove the first company (Bloomberg):
//The array becomes: ["Microsoft", "Uber", "Google", "IBM", "Netflix"]

//b. Remove "Uber" and add "Ola" in its place:
//The array becomes: ["Microsoft", "Ola", "Google", "IBM", "Netflix"]

//c. Add "Amazon" at the end:
//The array becomes: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log('original: ',companies);

// companies.shift();
// console.log('a: ',companies);

// companies.splice(1,1,'Ola');
// console.log('b: ',companies);

// companies.push('Amazon');
// console.log('c: ',companies);