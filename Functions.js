//count vovel in string;

//normal futction
function countVovel(str){
    let count = 0;
    for(let i = 0; i < str.length; i++ ){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count ++;
        }
    }
    console.log(count);
}

countVovel("aaeeiioou");

//Arrow Function
const arrVovel = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++ ){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count ++;
        }
    }
    console.log(count);
}

arrVovel("aeiou");
