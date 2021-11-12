
let age=prompt('Put your age');

if(age<=17){
    console.log(`You are not adult you contact Gotok ${18-age} year's later`);
}else{  
    console.log(`You are an adult if you like can you get married`);
}

//Ternary 
let bois=17;

let adultBois = (bois < 18) ? 'Na amar age 18 hoi nai': 'Ha, amr age 18 ba tar chaye akto basi hobe';
console.log(adultBois);
