//DAY 1 

const { createElement } = require("react");

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
let allEl = document.querySelectorAll(".class");
console.dir(allEl);

//DOM PROPERTY (get , change, update) :-

//tagName : returns tag for element nodes.
let el = document.querySelector("id");
console.dir(el); //h1 

//innerText : return the text content of the element and all its children.
let div = document.querySelector("div").children;
console.dir(div);

//innerHTML : returns the plain text or HTML Content in the element.
let text = document.querySelector("div").innerHTML;
console.dir(text);


//PRACTICE:-

// Q1. Change Text using getElementById : -
//Create a <p> with id msg
//Using JS, change its text to "Hello DOM!"
let msgg = document.getElementById("msg").innerText ="Hello DOM!";
console.dir(msgg);

// Q2. Change Color using querySelector : -
//Create a <h2>
//Select it using querySelector
//Change its text color to blue
let color = document.querySelector("title").style.color ="blue";
console.dir(dir);

//DOM ATTRIBUTE :- 
//getAttribute(attr) :- to get the attribute value.
let div =  document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para);
//setAttribute(attr, val) :-  to set the attribute the value
let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass")); 

//to change style value : node.style
let div = document.querySelector("div");
div.style.backgroundColor ="green";
div.style.fontSize ="26px";
div.innerText ="Hello!";

//Insert Element (Add element) :- first create than add something
let newBtn = document.createElement("button");
newBtn.innerText ="Click me";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn); //node.append(el) : adds at the end of node (inside)

 div.prepend(newBtn); //node.prepend(el) : adds at the start of node (inside)

 div.before(newBtn); //node.before(el) : adds before the node (outside)

 div.after(newBtn); //node.after(el) : adds after the node (outside)

//DELETE ELEMENT
//node.remove() :- remove the node
let para = querySelector("para");
para.remove();

//PRACTICE QUESTION:- 
// Q1. Create a new button element. Give it text  "click me", background color of red & text color of white. Insert the button as the first element inside the body tag.(Do this work without using HTML )
let btn = document.createElement("button");
btn.innerText = "Click me";
btn.style.backgroundColor = "red";
btn.style.color ="white";

document.querySelector("body").prepend(btn);


//Create a <p> tag in HTML , give it a class and some styling . Now create a new class in CSS and try to append this class to the <p> element. (using class list )

let paragraph = document.querySelector("p");
paragraph.classList.add("newClass");

//remove
paragraph.classList.remove("newClass");


//JS - EVENTS :-
//event handling : 
let btn1 = document.querySelector("#btn1");
btn1.onClick = () => {
  console.log("btn1 was clicked");

};

let div = document.querySelector("div");
div.onmouseover = () =>{
  console.log("you are inside div");
};

//event object :- node.event = () =>{ handle here }
let btn1 = document.querySelector("#btn1");
btn1.onClick = (evt) => {
  console.log(evt);
  console.log(evt.type); //to print the type of evt 
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

//event listeners (best way of event handling ):-

//node.addEventListener( event , callback/handler);

btn1.addEventListener("click", () =>{
  console.log("button was clicked - handler 1");
});

btn1.addEventListener("click", () =>{
  console.log("button was clicked - handler 2");
});

const handler3 = () =>{
  console.log("button was clicked - handler 3");
};
btn1.addEventListener("click", handler3);

//node.removeEventListener(event, callback); 
//NOTE : the callback reference should be same to remove
btn1.removeEventListener("click", handler3);

//PRACTICE QUESTIONS:- 

// Q1. Button Click Event
//Create a button “Click Me”
//When clicked, log "Button Clicked!" in console.

let btn2 = document.querySelector("#btn2");
let btnHandler = () => {
  console.log("Button Clicked!");
};
btn2.addEventListener("click", btnHandler);

// Q2. Change Text on Button Click
//Create a <p> with text "Hello"
//Create a button "Change Text"
//On button click → change text to "Text Changed!"
//Concept: click event + innerText
let btn3 = document.querySelector("#changeBtn");
let para = document.querySelector("#text");

btn3.addEventListener("click", () => {
  para.innerText = "Text Changed!";
});

//create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let modeBtn = document.querySelector("#mode");
let currMode =  "light"; 

modeBtn.addEventListener("click", () => {
if(currMode === "light"){
  currMode = "dark";
  document.querySelector("body").style.backgroundColor = "black";
}else{
  currMode = "light";
  document.querySelector("body").style.backgroundColor = "white";
}
console.log(currMode);
});


//Classes & Objects :--

//Prototype in JS  : object having special property called prototype.
//we can set a prototype using __proto__ 

//Direct way of creating objects.
const student = {
  fullName : "muskan", //object property - usually called state
  marks : 94.4,  //object property
  printMarks : function () {
    console.log("marks =", this.marks); //using "this" we can access anything directly
  }, //methods
};

//using __proto__
const emp = {
  tax() {
    console.log("tax is 10%");
  },
};

const rahul ={
  salary : 20000,
};

rahul.__proto__ = emp; //when i want to inherit object function in another object , we can simply used it . It reduces the need of repeat of function.


//classes in JS
class toyotaCar{
  constructor() {
    console.log("creating new object");
  }

start() { //function
  console.log("Start");
}

stop() {  //function
  console.log("Stop");
}

setBrand(brand){
  this.brandName = brand; //define a variable
}

}

let fortuner = new toyotaCar(); //using "new" keyword creating object of class
console.log(fortuner);
let lexus = new toyotaCar();  
lexus.setBrand("lexus");
console.log(lexus);

//Inheritance in JS
//for inheritance using keyword "extends"
class Parent {    //class 1
 hello() {
  console.log("hello");
 }
}

class Child extends Parent {} //class 2 inherits class 1 
 
//Another Example
class Person {
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }

}

class Engineer extends Person {  //class engineer also inherits the features of class person .
  work() {
    console.log("solve problems , build something");
  }
}

let nehaObj = new Engineer(); //creating objects 
nehaObj.eat();  //calling a function using object
nehaObj.work();

//NOTE : If Child & Parent have same method, child's method will be used.[this concept is known as Method Overriding]


//Super keyword :- used to calls the constructor of its parent class to access the parent's proprties and methods.

class Emp {
  constructor() {
    console.log("enter parent constructor");
    this.species = "hono sapiens";
  }

  eat() {
    console.log("eat");
  }
}
 
class Engineer extends Emp {
 constructor(branch) {
  console.log("enter child constructor");
  super();  // to call parent class constructor
  this.branch = branch;
  console.log("exit child constructor");
 }

 work() {
  console.log("solve problems , build something");
 }
};

let engObj = new Engineer("chemical engg");

//output :-  enter child constructor
// enter parent constructor
// exit child constructor 
// Notes : -- that means first child class constructor work than parent class after done the work they come back in the child class and excutes the work after the super() keyword . 


//PRACTICE :- you are creating a website for your college .create a class User with two property ,name & email. it also has a method called viewData() that allow user to view website  data.

let DATA = "secret information";
class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
  }

  viewData() {
 console.log("Data" , DATA);
  }
}

let student1 = new User("muskan" , "abc@gmail.com");
let student2 = new User("kanika" , "xyz@gmail.com");


//Create a new class called Admin which inherit from User. Add a new method called editData to Admin that allows it to edit website data.
let DATA = "secret information";
class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
  }

  viewData() {
 console.log("Data" , DATA);
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData(){
    DATA ="some new value";
  }
}

let student1 = new User("muskan" , "abc@gmail.com");
let student2 = new User("kanika" , "xyz@gmail.com");

let admin1 = new Admin("admin", "admin@gmail.com");

//in this admin having access to change data but user have not.

// try-catch Block :-

const a = 10;
const b = 5;
console.log("a =", a);
console.log("b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
try{
console.log("a * b =", a * c); //if you having doubt any line of code than this line put in the try block . If error occur catch block is used to catch these error.
}catch(err){  //err is error object 
  console.log(err);
}
console.log("a / b =", a / b); 

// callbacks :- is a function passed as an argument to another function.
const hello = () => {
  console.log("hello");
};

setTimeout(hello, 3000); // after 3 sec hello is print on the screen.

// Callback Hell :- nested callbacks stacked below one another forming a pyramid structure. (Pyramid of DOOM)
function getData(dataId) {
  setTimeout(() => {
    console.log("data", dataId);
  }, 2000); // 2 sec
}

// when you want get many data one by one
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);//2s
}

getData(1 , () => {
  console.log("data 2 ...");
  getData(2); //passing callbacks 
}); //data 1 after 2s data 2 occure on screen

//some time you need many callbacks one after another :-
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000); //2s
}

getData(1, () => {
  console.log("data 2...");
  getData(2, () => {
    console.log("data 3...");
    getData(3, () => {
      console.log("data 4...");
      getData(4);
    });
  });
}); // after 2s data 1 occure and than after 2s data 2 occure and so on . 

//This is very difficult to understand because one callbcaks another callbacks that's why it is called callback hell .
//To resolve this callback hell problem in js Promise comes .



