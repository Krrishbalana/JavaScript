// alert VS prompt
// alert("hello"); // one time pop-up with msg
// prompt("hello");// pop-up with msg and can take input

// let yourName = prompt("enter your name");
// console.log(yourName);

// Question: Get user to input a number using prompt"Enter a number" then check weater the number is multiple of 5 or not.

let num = prompt("Enter a number");
if(num % 5 === 0){
    console.log(num, "multiple of 5");
}else{
    console.log(num ,"not a multiple of 5");
}
