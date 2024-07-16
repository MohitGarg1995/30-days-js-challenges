// Variables and Data types

// Task 1:---
// variable declaration

var count = 22;
console.log("count is -->", count);

let userName = "Mohit Garg";
console.log("Name of the user is -->", userName);

// Task 2:---
// Constant declaration

const isLogIn = true;
console.log("Did User has logged in ?  ",isLogIn);

// Task 3:---
// Data Types

var number = 14;
var string = "ram";
var boolean = false;
var object = {"name":"ram", "age":22};
var array = [1,5,99,"ram"];
var undef ;
var answer = ""

console.log(number, typeof(number));
console.log(string, typeof(string));
console.log(boolean, typeof(boolean));

console.log(object, typeof(object));
console.log(array, typeof(array));       // TYPE of array is object.

console.log(undef, typeof(undef));       // TYPE is undefined.
console.log(answer, typeof(answer));    



//Task 4:---
// Reassigning Variables

let a = 1;
// let a = 2;                              //Cannot redeclare block-scoped variable 'a' 

// let firstName = "ram";
let firstName;
firstName = "garg";                         // but we can reassign the variable.



//Task 5:---
// Const 

const Fname = "raja";
// Fname = "baja";                           // this reassignment is not allowed.

console.log(Fname);


// Note: The const keyword is used to declare a constant variable. A constant variable cannot be reassigned. Once a constant variable is assigned a value,
// it cannot be changed. If you try to reassign a constant variable, you will get an error.. 
// The let keyword is used to declare a variable that can be reassigned. A variable declared using the let keyword can be reassigned a new value.


