//DAY 1 
//how to print in JS
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

//DAY 2
//JS operators
//Arithmetic operators
 let a = 5;
 let b = 10;
 console.log("a + b =" ,a + b); //Additional operator

 let a = 5;
 let b = 3;
 console.log("a - b =", a - b);  //Subtractioal operator 

let a = 3;
let b = 4;
console.log("a * b =", a * b); //Multiplicational operator

let a = 3;
let b = 4;
console.log("a / b =", a / b); //Divisional operator

let a = 3;
let b = 4;
console.log("a % b =", a % b); // Modulus operator :- gives remainder

let a = 2;
let b = 4;
console.log("a ** b =", a ** b); //Exponentiation operator 

// Unary operator
let a = 3;
let b = 4;
console.log("a =", a , "and b =", b);
a = a+1;         //Incremental operator
console.log("++a =", a); // output : a = 4

let a = 2;
let b = 6;
console.log("a =",a , "and  b = ", b);
b = b-1;       //Decremental operator
console.log("--b =", b); //output : b = 5

// Asignment Operators
 let a = 4;
 let b = 3;
 a += 2;  //value add and than assign 
 console.log("a =", a); // output : a = 6 
let a = 4;
  let b = 3;
 a -= 1;  //value subtract and than assign 
 console.log("a =", a); // output : a = 3 


// Comparision Operators
let a = 3;
let b = 4;
console.log("a == b", a == b); //  == equal to  output : false 

let a = 3; 
let b = 4;
console.log("a != b", a != b); // != not equals to  output : true

let a = 4; // number
 let b = "4"; // string (change in number than compare)
 
 console.log("a == b", a == b); // output : a == b true

// strict version === (Equals to and data type check)
let a = 4; // number
 let b = "4"; // string (change in number than compare)
 
 console.log("a === b", a === b); //output : a === b false

//  !== (Not equal to and data type check)
 let a = 4; // number
 let b = "4"; // string (change in number than compare)
 
 console.log("a !== b", a !== b); //output : a !== b true

// greator operator
let a = 6; 
 let b = 2;
 console.log("a > b", a > b); //output : a > b true

// Logical operators:
// AND (&&) 
let a = 3;
let b = 2;
let cond1 = a>b ; //true
let cond2 = a===3; //true
console.log("cond 1 && cond 2:", cond1 && cond2); // output: true  
 //&& (AND)when both conditions should be same . The result should be true

// OR (||)
let a = 3;
let b = 7;
let cond1 = a>b ; //false
let cond2 = a===3; //true
console.log("cond 1 || cond 2:", cond1 || cond2);  //true
// OR (||) atleast one condition should be true . The result will be true

// NOT (!)
let a = 3;
let b = 2;
console.log("!(a >b) =", !(a>b)); // output : false
// NOT (!) if condition is true than result will be false . If condition is false than result will be true

// Conditional statements:
// if Statement
let age = 18;
if(age>=18){
  console.log("Adult");
}  // output : Adult

// if-else 
  let age = 16;
if(age>=18){
  console.log("Adult");
}else{
  console.log("Child");
} //output : Child

// else-if 
let marks = 82;
if(marks>=90){
  console.log("Grade : A");
}else if(marks>=80 && marks<90){
  console.log("Grade : B");
}else{
  console.log("Grade : C");
} // output:-  Grade : B

// Ternary operator (simpler , compact  if-else  )
 let age = 20;
  let result = age>=18 ? "Adult" : "Child";
  console.log(result);  //Adult

// Switch statement
let day = "fri";
switch(day){
  case 'mon' : 
  console.log("Starting days");
 break;
case 'fri' :
  console.log("Ending days");
  break;
  default : 
  console.log("Invalid day")
} //Ending days 

// alert : one time message popup 
alert("Welcome!");

// prompt : one time message popup + provide input box to temporary user input
prompt("hello");


// PRACTICE :
// get user to input a number using prompt("Enter a number:"). Check if the number is multiple of 5 or not.

 let num = prompt("Enter a number:");
 if(num % 5 ===0){
  console.log(num ,"is Multiple of 5" )
 }else{
  console.log(num ,"is not Multiple of 5");
 } 


 //Day 3 
 //Loops in JS

 //FOR LOOP  : count from 1 to 5

 for(let i=0; i<=5; i++){
  console.log("The Number is :", i);
 }

 //calculate sum of 1 to 5
 let sum = 0;
 for(let i=1; i<=5; i++){
  sum = sum + i;
 } 
 console.log("The sum is:", sum);
 
 //WHILE LOOP  : count from 1 to 6
 let i =1;
 while(i<=6){
  console.log("The number is :", i);
  i++;
 }

//DO-WHILE LOOP : count from 1 to 3
let i=1;
do{
  console.log("The Number is:", i);
  i++;
}while(i<=3); //output: The Number is: 1

//for-of Loop : helps to iterate over array and strings
let str = "Hello! Muskan";
for(let i of str){
  console.log("i:", i);
}

//for-in Loop : helps to return a key of an object 
let student={
  name : "muskan",
  age : 20,
  CGPA : 8.9,
};
for(let i in student){
  console.log(i);
}
//key with value 
let student={
  name : "muskan",
  age : 20,
  CGPA : 8.9,
};
for(let key in student){
  console.log("key =", key , " value =", student[key]);
}

//PRACTICE :
//Print all even number from 1 to 100

for(let num=1; num<=100; num++){
  if(num % 2===0){
    console.log("The Number =", num);
  }
}

//create a game where you start any random game number . Ask the user to keep guessing the game number until the user enter correct value.

let gameNum = 45;
let userNum = prompt("Guess the Game Number:");
while(userNum != gameNum){
  userNum = prompt("Wrong Number , Guess Again");
}
console.log("Congratulations . You Guess Right");

//STRINGS: 
//properties: 
//string length use : str.length 
let str = "Hello!";
console.log(str[2]); // output : l

//Template literals: the way for writting a string with variable/expression using ${expression/variable}.
//using Variable:-
let obj = {
  item : "pen",
  price : 10
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//using expression:-
let num = `The num is ${2+6}`;
console.log(num);

//String methods: 
//str.toUpperCase()
let str = "muskan";
console.log(str.toUpperCase());

//str.toLowerCase()
let str = "MUSKAN";
console.log(str.toLowerCase());

//str.trim() :- remove whitespaces of starting and ending 
let str = "      Helllo Muskan      ";
console.log(str.trim());

//str.slice(start, end) :- return parts of string, ending value non-inclusive
let str = "muskan";
console.log(str.slice(0,3)); //output mus

//concat():- join str2 with str1
let str1= "hello";
let str2= "muskan";
let result = str1.concat(str2);
console.log(result);

//str.replace(searchVal , newVal):- to replace old value with new value
let str = "hello";
console,log(str.replace(h,y)); //output: yello

//str.charAt(index):- to find character index
let str ="I love JS";
console.log(str.charAt(0)); //output I




