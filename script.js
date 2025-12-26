// how to print in JS
console.log("Hello! Muskan ");
console.log("I Like to Learn JS ");

//variables 
let name ="Muskan Pant";
let age = 21;
const course ="BCA";
const PI = 3.14;
console.log(course);

//data types checks 
let age = 20;
console.log(typeof(age));  //number
 
let name = "hello";
console.log(typeof(name)); //string

let isFollow = true;
console.log(typeof(isFollow)); //boolean

let x = null;
console.log(typeof(x)); //object : absense of an object .

let a = BigInt(12432);
console.log(typeof(a)); //BigInt 

let y = Symbol("hello!");
console.log(typeof(y)); //symbol

//oject creation 
const student={
  name: "Muskan",
  age : 20,
  CGPA : 8.9
};
student["age"] = student["age"] + 2;
console.log(student["age"]);  //create an first object & update the object key 

//oject preps. to follow sample pic 
const product ={
  name: "Parker Jotter Standard CT Ball Pen(Black)", 
  rating : 4,
  isDeal : true,
  offer : 5, 
  price: 270
};
console.log(product);

