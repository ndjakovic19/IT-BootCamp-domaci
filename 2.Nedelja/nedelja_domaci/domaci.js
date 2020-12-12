// 1.Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу

{
let cena = 900;
let precnik = 30;
let r = precnik/2;
let povrsinaPice = r**2 * Math.PI;

console.log('Cena pice po cm² je:', cena/povrsinaPice);
console.log('____________________________');
} 

// zadatak2.js

// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,...)

{
let N = 100;

for(let i = 1; i <= N; i++){
    
if(i % 3  != 0 && i % 5  != 0 ){
    console.log(i) 
    continue
}else if(i % 3  == 0 && i % 5  == 0){
    console.log('Fizz','Buzz');
}else if(i % 3  == 0){
    console.log('Fizz');
}
else if(i % 5  == 0){
    console.log('Buzz');
}
}       
console.log('_____________________');
}

// 3.Исписати Марио пирамиду одређене висине:
// За n = 5

// #
// ##
// ###
// ####
// #####

{
n = 5;

for(let i = 1; i <= n; i++){
console.log('#'.repeat(i));
}
console.log('________________');
}


//4. Исписати Марио пирамиду одређене висине:
// За n = 5

//     #
//    ## 
//   ###
//  ####   
// #####

{
n = 5;

for(let i = 1; i <= n; i++){
    console.log(' '.repeat(n-i) + '#'.repeat(i));
    }
console.log('____________________');
}



// 5.Исписати Марио пирамиду одређене висине:
// За n = 5

//     # #
//    ## ##
//   ### ###
//  #### ####  
// ##### #####


{
n = 6;

for(let i = 1; i <= n; i++){
    console.log(' '.repeat(n-i)+ '#'.repeat(i) + ' '+ '#'.repeat(i));
}

}
