//--------------------------------------------OPERATORS AND CONDITIONAL STATEMENT--------------------------------------------------------

// THIS IS SINGLE LINE COMMENT

/* THIS IS 
MULTI LINE COMMENT
*/


// Arithmatc operators:-

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a + b);
console.log(a/2);
console.log(b/2);
console.log(a ** b); // a**b --> a^b
a++; //increment
console.log(a);
a--; //decrement
console.log(a);

//Asignment operators
// (=, +=, -+, *=, %=, **=)




a = 20; //  Asignment operators(=)
a += 2; //  Asignment operators(+=)----> a = a+2 = 22;
console.log(a);
a -= 2; //  Asignment operators(-=)----> a = a-2 = 22-2= 20;
console.log(a);
a *= 2; //  Asignment operators(*=)----> a = a*2 = 20*2= 40;
console.log(a);
a %= 2; //  Asignment operators(%=)----> a = a%2 = 40%2= 0; // 40 leave reminder = 0 when divided by 2
console.log(a);
a = 2;
a **= 3 //  Asignment operators(**=)----> a = a** 3 = a^3; 2*2*2= 8
console.log(a);

// comparision Operator
//(<, <=, >, >=, ==, !=)
//(===) : equal to and type
//(!==) : not equal to and type




a = 10;
b = 9;
let c = "10";
console.log("a == b", a == b); //false
console.log("a != b", a != b); //true
console.log("a <= b", a <= b); //false
console.log("a >= b", a >= b); //true
console.log("a > b", a > b); //true
console.log("a < b", a < b); //false
console.log("a === c", a === c); //false because no is same but tyoe is different
console.log("a == c", a == c); //true // string become number then compared



//Loginal Operator
//(|| , ! , &&)

a = 5;
b = 6;
console.log( a != b && a < b); //true becuse both condiition are true
console.log( a == b && a < b); //false because 1 condition is not true
console.log( a == b || a < b); //true is any one condition is statisfied
console.log(!(a==b)); //reverse the condition







