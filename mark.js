let name=prompt('Put Your name')
let marks= prompt('Please put your marks')

if(marks>0 && marks<=32){
    console.log("You failed to try next year");

}else if(marks>32 && marks<40){
console.log(`You psss the examination you got GPA = D`);
}else if(marks>40 && marks<50){
console.log(`You psss the examination you got GPA = c`);
}else if(marks>50 && marks<60){
console.log(`You psss the examination you got GPA = B`);
}else if( marks>60 && marks<70){
    console.log(`You psss the examination you got GPA = A-`);
}else if(marks>70 && marks<=80){
    console.log(`You psss the examination you got GPA = A`);

}else if( marks>80 && marks<90){
    console.log(`You psss the examination you got GPA = A+`);
}else if(marks>90 && marks<=100){
console.log(`You psss the examination you got GOlDEN +`);
}else{
    console.log(`You are not attend examination`);
}

