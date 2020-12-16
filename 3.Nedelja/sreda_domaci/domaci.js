// 1. Написати функцију која за параметар прима број сати (0-24) и у зависности од доба дана исписује поруке: Добро јутро , Добар дан или Добро вече.
// Napomena: oba zadatka sam radila bez return-a jer nisam nigde videla da vraća vrednost. 


{
function partOfTheDay(num) {
    if (num >= 4 && num <= 11) {
        console.log('Dobro jutro')
    }
    else if (num >= 12 && num <= 18) {
        console.log('Dobar dan')
    }
    else if (num >= 19 && num <= 24) {
        console.log('Dobro veče')
    }
    else if (num >= 0 && num <= 3) {
        console.log('Dobro veče')
    }
    else {
        console.log('Morate upisati broj od 0 do 24') }
    }

    partOfTheDay(4)
    partOfTheDay(0)
    partOfTheDay(25)
    partOfTheDay(20)
    partOfTheDay(14)

    console.log('_______________________');
}




// 2. Написати функцију која израчунава цену пице по квадратном центиметру(параметри функције су полупречник у цм, и цена пице)

{
function cenaPicePoCm(r,ukupnaCena){
  if(r > 0 && ukupnaCena > 0){
     let povrsinaPice = r**2 * Math.PI
     console.log('Cena pice po cm² je:', ukupnaCena/povrsinaPice);
  }
  else{
      console.log('Ukupna cena pice i precnik moraju biti veci od 0');
  }
    
}

cenaPicePoCm(20,900)
cenaPicePoCm(-20,900)
}
