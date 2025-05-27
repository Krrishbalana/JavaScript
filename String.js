let str1 = "krrishbalana"; // define string way no 1
let str2 = 'Garimabalana'; // define string way no 2

//-----------in-built properties of string
//1.to print length of string
console.log(str1.length);
//2.string indices
console.log(str1[0]); //k
console.log(str1[1]); //r
console.log(str1[2]); //r
console.log(str1[3]); //i
console.log(str1[4]); //s


//-----------template literals
let str = `this is the template literal(a special type of strings)`;
//practical use of template literals
let obj = {
    item: "pen",
    price: 10,
};
//1st normal way
console.log("the price of", obj.item, "is", obj.price, "rupees");
//2nd way-using template literals
let output = `the price of ${obj.item} is ${obj.price} rupees`;
console.log(output);


//-----------Escape Characters
let str3 = "krrish\nBalana";
let str4 = "krrish\tBalana"
console.log(str3); // \n shift to new line
console.log(str4); // \t adds space of tab


//-----------string methods
//1. str.toUpperCase();
console.log(str1.toUpperCase()); //KRRISHBALANA
//2. str.toLowerCase();
let str5 = "KRISH";
console.log(str5.toLowerCase()); //krish
//3. str.trim();
let str6 = "    Krish Balana    ";
console.log(str6.trim()); //krish balana

//there are more methods in js you dont need to remember "go to MDN Web Docs and you can read"






