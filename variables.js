Myname = "krish balana";
age = 21;
price = 99.99;
a = null;
b = undefined;
isprime = true; // boolean type 

console.log(Myname);
console.log(age);
console.log(price);
console.log(a);
console.log(b);
console.log(isprime);

// let , var , const
// var = can be redeclare and updated
// let = can't be redeclare butcan be updated{A block scope variable}----> we use most of the cases
// const = can't redeclare and can't updated

{
    let myAge = 22;
    console.log(myAge);
}
{
    let myAge = 50;     // can be redefine in another block
    console.log(myAge);
}
