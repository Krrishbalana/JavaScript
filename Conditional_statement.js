//---------------------------------------------------------Conditional Statement in JS--------------------------------------------------
//if else statement
let age = 19;
if(age >= 18){
    console.log("adult");
}else{
    console.log("not adult");
}
//ternary operator:compact form of if-else statement
age >= 50 ? console.log("old") : console.log("not old");

// if else-if statement
let marks = 90;
if(marks > 90){
    console.log("A Grade");
}
else if(marks > 80 && marks <= 90){
    console.log("B Grade");
}
else{
    console.log("C Grade");
}

//there is something called switch statement in programming we dont use switch statement more often so if you want you can read it from MDN Docs
