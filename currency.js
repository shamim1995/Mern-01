let currency=prompt("input your dollar")
let amount=prompt("Amount")

if(currency=='dollar'){
    console.log(`your total money =${amount*86}`);

}else if(currency=="Euro"){
   console.log(`your total money =${amount*116}`);

}else if(currency=='rupee'){
console.log(`your total money =${amount*30}`);
}else{
    console.log(`please fill up correctly`);
}