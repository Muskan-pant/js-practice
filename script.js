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


//DAY 4 
//ARRAYS

let marks = [45,87,100,63];
console.log(marks);
console.log(marks.length);  // .length is a property to find length

let marks = [45,87,100,63];
marks[1] = 60; //can change value using index
console.log(marks); 


//Print all elements of an array (LOOPING OVER AN ARRAY)
//for loop
let colors =[ "blue", "pink", "yellow", "gray"];
for(let i=0; i<colors.length; i++){
  console.log(colors[i]);
}

//for of loop :- generally used for array
let colors =[ "blue", "pink", "yellow", "gray"];
for(let color of colors){
  console.log(color);
}

//print all elements in upper case using for- of loop:-
let cities =[ "delhi", "mumbai", "pune", "gurgaon"];
for(let city of cities){
  console.log(city.toUpperCase());
}

//PRACTICE:- 

//For a given array with marks of students->[85,97,47,89,50]. Find the average of marks of entire class.
let scores =[85,97,47,89,50];
let sum = 0;
for(let score of scores){
  sum += score;
}
let avg = sum/scores.length; 
console.log(`Average scores of class =  ${avg}`);  //template literals use to print output

//For a given array with the prices of 5 items [200, 350, 900, 450]. All items have 10% OFF on them.Change the array to store the final price after applying offer.

let items = [200, 350, 900, 450];
for(let i=0; i<items.length; i++){
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log(items);

//Arrays Methods:- 
//push() :- add to end 
let fruits = ["apple", "orange", "mango", "grapes"];
fruits.push("banana");
console.log(fruits);

//pop() :- delete from end and return
let fruits = ["apple", "orange", "mango", "grapes"];
let deItem = fruits.pop();
console.log(fruits);
console.log("deleted item =", deItem);

//toString() :- convert array to string
let country = ["india", "america", "pakistan", "russia"];
console.log(country.toString());

//concat() :- joins multiple arrays & returns result
let healthyFood = ["greenVegies", "chappati", "pulses"];
let fastFood = ["pizza", "burger", "pasta"];
let foodItems = healthyFood.concat(fastFood);
console.log(foodItems);

//unshift() :- add to start
 let fastFood = ["pizza", "burger", "pasta"];
 fastFood.unshift("momos");
 console.log(fastFood);

 //shift() :- delete from start and returns
 let fastFood = ["pizza", "burger", "pasta"];
 let val = fastFood.shift();
 console.log("deleted =", val);

 //slice() :- returns a piece of an array
 //slice(startIdx, endIdx) 
 let fastFood = ["pizza", "burger", "pasta", "noodles", "fries"];
 console.log(fastFood.slice(1,3));

 //splice() :- change original array(add, remove , replace)
 //Splice(startIdx, delCount, newEl1....)
 let numbers = [10,20,30,40,50,60,70];
 numbers.splice(0,2,100,500);

 

 //REVISE JS CONCEPTS:-

 //variables & data-types:-

 //1. Declare a variable name and store your name.
 //2. Declare a variable age and store your age.
 //3. Create a variable isStudent and store true or false.
 //4. Print the type of each variable using typeof.
 //5. Change the value of age and print it again.

 let userName = "muskan";
 console.log(typeof(userName));
 let age = 20;
 console.log(typeof(age));
 age += age;
 console.log(age);
 let isStudent = true;
 console.log(typeof(isStudent));

 //operators:-

  //1. Add two numbers and print the result.
 //2. Subtract, multiply, and divide two numbers.
 //3. Check if 10 > 5 and print the result.
 //4. Check if 5 == "5" and 5 === "5".
 //5. Use logical AND (&&) to check:--
 // age > 18 and isStudent is true.

 // 1 & 2. 
 let a = 10;
 let b = 5;
let sum = a + b;
let subtract = a - b;
let multiply  = a * b;
let divide = a / b;
console.log("sum =", sum);
console.log("subtract =", subtract);
console.log("multiply =", multiply);
console.log("divide =", divide);

// 3. 
let x = 10;
let y = 5;
let greator = x > y ;
console.log(greator); //true

// 4. 
let a = 5;
let b = "5";
let looseChecks = 5 =="5"; // true (value only)
console.log(looseChecks);
let strictChecks = 5 ==="5"; //false (type + value)
console.log(strictChecks);

// 5. 
let age = 20;
let isStudent = true;
let canApply = age >= 18 && isStudent;
console.log(canApply);

//conditionals :-

 //1. Check if a number is positive or negative.
 //2. Check if a person is eligible to vote (age ≥ 18).
 //3. Check if a number is even or odd.
 //4. Print "Pass" if marks ≥ 40, else "Fail".
 //5. Use else if to check grade:--
 // a.)  ≥ 90 → A
 // b.) ≥ 75 → B
 // c.) else → C

 // 1. 
 let num = 10 ;
 if(num > 0){
  console.log("positive");
 }else{
  console.log("negative");
 }

 // 2. 
 let age = 20;
 let result = age >= 18 ? "Adult" : "Child";
 console.log(result);

 // 3. 
 if(num % 2 === 0){
  console.log("even number");
 }else{
  console.log("odd");
 }

 // 4. 
 let marks = 50 ;
 if(marks >= 40){
  console.log("Pass");
 }else{
  console.log("fail");
 }

 // 5.
 let score = 85;
 if(score >= 90){
  console.log("Grade A");
 }else if(score >= 75 ){
  console.log("Grade B");
 }else{
  console.log("Grade C");
 }

//Looping Statements :--

//1. Print numbers from 1 to 5 using for loop.
//2. Print numbers from 5 to 1.
//3. Print even numbers between 1 to 10.
//4. Use while loop to print numbers from 1 to 3.
//5. Loop through an array and print each value.

// 1. 
let num = 5 ;
for(let i = 1; i <= num; i++){
  console.log("The Number =", i);
}

// 2. 
for(let i = 5; i >=1; i--){
  console.log("The Number =", i);
}
 
// 3.
for(let num = 1; num<=10; num++){
  if(num % 2 === 0){
    console.log("Even Number =", num);
  }
}

// 4. 
let i = 1;
while(i <= 3){
  console.log("The Number =", i);
  i++;
}

// 5. 
let colors = ["blue", "pink", "yellow", "gray", "black"];
for(let color of colors){
console.log(color);
}

//Strings :--

//1. Create a string "JavaScript".
//2. Print its length.
//3. Convert it to uppercase.
//4. Check if the string contains "Script".
//5. Print the first 4 characters of the string.

let str = "JavaScript";   
console.log(str.length);  //output :- 10
console.log(str.toUpperCase()); //output:- JAVASCRIPT
console.log(str.includes("Script")); //output:- true
console.log(str.slice(0,4)); //output:- java

//Arrays:--

//1. Create an array of 5 numbers.
//2. Print the first and last element.
//3. Add a new element at the end.
//4. Remove the last element.
//5. Loop through the array and print each element.

let num = [33, 78, 40, 23, 98];
console.log(num[0],[4]);
console.log(num.push(100));
console.log(num.pop());
for(let el of num){
  console.log(el);
}


//DAY - 5:-
//Array Methods

//map():- create new array with the result of some operations.The value its callback returns are used to form new array.
//  arr.map(callbackFnx(value, index, array))
let nums = [34, 67, 89, 22,50];
let newArr = nums.map((val) =>{
  return val;
});
console.log(newArr);

//value square
let nums = [34, 67, 89, 22,50];
let newArr = nums.map((val) =>{
  return val * val;
});
console.log(newArr);

//filter() :- create new array of elements that gives true for a condition/filter.
//eg :- all even elements 
let arr = [23, 67,44,84,93];
let evenEl = arr.filter((val) =>{
  return val % 2 === 0;
});
console.log(evenEl);

//find values that are greater than 10 .
let arr = [23, 2, 10, 67,44,84,93];
let evenEl = arr.filter((val) =>{
  return val > 10;
});
console.log(evenEl);

//reduce():- arr.reduce((res , currentVal) => {} );
// performs some operations and reduces the array to a single value.it returns that single value.
const arr =[1,2,3,4,5];
const output = arr.reduce((res, currentVal) => {
  return res + currentVal;
});
console.log(output); //15 


//DAY - 6
//Function:--
function myFunc(){
  console.log("hello");
}
myFunc();

//input depends function:-
function myFunc(msg){ //parameter -> input
  console.log(msg);
}
myFunc("I love JS"); //arguments

//pass multiple arguments:-
function myFunc(msg, n){
  console.log(msg + n);
}
myFunc("I love JS" ,  "HTML");

//function -> 2 numbers sum
function myFunc(x , y){
  //local variables
  console.log(x + y);
}
myFunc(10 , 4); //output 14

//Arrow function:- compact way of writing a function. Used in Modern JS.
const arrowMul = (x , y) => {
  console.log(x * y);
};
arrowMul(10 , 4);

//with parameter arrow function work:-
let sayHello = () => {
  console.log("Hi! Muskan");
};

//PRACTICE Q :-
//create a function using the function keyword that takes a string as a arguments & return the number of vowels in the string.
function countVowels(str){
  let count = 0;
  for(const char of str){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
      count++;
    }
  }
  console.log(count);
};
countVowels("Muskan Pant"); //output 3

//create arrow function to perform same task:-
 const countVow =(str) => {
  let count = 0;
  for(const char of str){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
      count++;
    }
  }
  console.log(count);
};
countVow("Muskan Pant"); //3 


//PRACTICE JS FUNCTION QUESTIONS:---
//create function named sayHi that prints: Hi, JavaScript!
function sayHi(){
  console.log("Hi, JavaScript!");
};
sayHi();

//Add two numbers that returns the sum of two numbers.
function addNum(a , b){
let sum = a + b;
 return sum; 
}
console.log(addNum(10 , 5));

//Find square that returns the square of a number.
function square(num){
  return num * num;
};
console.log(square(4));

//Check even or odd
function checkEvenOdd(num){
  if(num % 2 === 0){
    console.log("Even");
  }else{
    console.log("Odd");
  }
};
checkEvenOdd(6);

//print name and age
function printDetails(name , age){
  console.log("Name :" , name , "Age :", age);
};
printDetails("Muskan" , 20);



//DAY -7 :-- JS DOM

//DOM Manipulation :-- selecting with id 
let heading = document.getElementById("heading");
console.dir(heading); //dir used because this is an  object 

//selecting with class
let section = document.getElementsByClassName("section");
console.dir(section);
console.log(section);

//secting with tag
let buttons= document.getElementsByTagName("button");
console.dir(buttons);


//Query Selector :- return node list
//document.querySelector("myId / myClass /tag")  :-- return first element
let elements = document.querySelector("id");
console.dir(elements);

//dovcument.querySelectorAll("myId / myClass /tag") :--returns a nodeList
let allEl = document.querySelectorAll("class");
console.dir(allEl);
