//1. За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b).

{
let a = 20;
let b = 4;
let zbir = a + b;
let razlika = a - b;
let proizvod = a * b;
let kolicnik = a / b;
let ostatak = a % b;
let stepen = a ** b

console.log('Zbir je:',zbir);
console.log('Razlika je:',razlika);
console.log('Proizvod je:',proizvod);
console.log('Količnik je:',kolicnik);
console.log('Ostatak je:',ostatak);
console.log('Stepen je:',stepen);
console.log('------------------------------------------------');
}

// 2.js - Продавница

// - Направити променљиву која представља цену производа коју купац жели да купи
// - Направити променљиву која представља количину новца коју купац има
// - Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
// - Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

{
let cenaProizvoda = 992.45;
let novac = 300;
let kusur = novac - cenaProizvoda;

if (novac < cenaProizvoda){
    console.log('Nemate dovoljno novca, trenutno stanje je',novac );
}else {
    console.log('Uspešno ste kupili proizvod,trenutno stanje je',kusur);
}
    console.log('------------------------------------------------');
}

// 3.js
// - Направити променљиву која има вредност неког броја (цео број)
// - Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
// - Ако није, Број _ није дељив са 3

{
let broj = 273;

if(broj % 3 == 0){
    console.log('Broj ',broj +' je deljiv sa 3');
}
else{
    console.log('Broj',broj + ' nije deljiv sa 3');
}
console.log('------------------------------------------------')
}

// 4.js
// Исписати првих 1000 бројева дељивих са 5
// Napomena: krenula sam od 0 jer nisam bila sigurna da li se i ona računa. 

{
let M = 1000;
for(i = 0; i <= M; i++ ){
    if(i % 5 == 0){
    console.log(i);
    }
}
console.log('------------------------------------------------')
}