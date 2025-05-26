//for-in-loop --> used for objects and arrays

let student = {         //object defining
    stName : "krish",
    age : 22,
    cgpa : 6.3,
    isPass : true,
};

for(let i in student){
    console.log(i);  // return keys in object
    console.log("value =", student[i]);
}



