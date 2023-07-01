//object -> Details of particular thing

var laptop = {
  brand: "Dell",
  processor: "Intel",
  memory: 8.0,
  display: "hd",
  price: "$400"
}


console.log(laptop.memory)
console.log(laptop.display)

// functions

function greeting() {
  console.log("Good Morning");
}
greeting();

// var vs let

// var -> function scoped
function student() {
  for (var i = 1; i <= 3; i++) {
    console.log("Hello");
  }
  console.log(i);
}
student();

// let -> braces scoped => parent {}
function teacher() {
  for (let i = 1; i <= 3; i++) {
    console.log("Hello");
  }
  console.log(i); //this will throw an error
}
teacher();

// push, pop, unshift,shift, splice

//push -> to insert element at the end of an array
var arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

//pop -> to remove element from the end of an array
var arr = [1, 2, 3, 4];
arr.pop();
console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

//unshift -> to add element at the start of an array
var arr = [1, 2, 3, 4];
arr.unshift(6);
console.log(arr);

//shift -> to remove element from the start of an array
var arr = [1, 2, 3, 4];
arr.shift();
console.log(arr);
// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);

//splice -> to remove elements from the array
var arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 1);
console.log(arr);