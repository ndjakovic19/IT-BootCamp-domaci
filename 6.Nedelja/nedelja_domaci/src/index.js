// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu .
// Div korpa se prikazuje tek kada se korisnik ulogovao.
// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod
// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 
// proizvod moze biti prehrambeni ili bela tehnika
// ako je bela tehnika ima i garanciju
// ako je prehrambeni ima rok trajanja
// 3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu manju od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe
// 4. Ako je korisnik admin moze da doda nov proizvod

import{Kupac,registrovaniKupci,isValidKupac,Proizvod,proizvodi,BelaTehnika,belaTehnika,PrehrambeniProizvod,prehrambeniProizvod} from'./service.js'
const forma = document.querySelector('#forma')
const inputName = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const divKorpa = document.querySelector('.korpa')
const divProizvodi = document.querySelector('.proizvodi')

//LOGOVANJE 
forma.addEventListener('submit', (e) => {
    e.preventDefault()
  
    let k = new Kupac(inputName.value, inputPassword.value)

    if (isValidKupac(k)) {
      //kreiranje diva korpa i prikaz
      let korpa = document.createElement('div')
      let h3 = document.createElement('h3')
      h3.textContent = `Vasa korpa: ${k.username}`
      korpa.append(h3)
      divKorpa.append(korpa)
    }else {
        window.alert('Pogrešan e-mail ili password!')
    }
    inputName.value = ''
    inputPassword.value = ''
  })


//IZLISTAVANJE  PROIZVODA NA STRANICI

const izlistajProizvode = ()=>{

    proizvodi.forEach((proizvod) => {
        const divProizvod = document.createElement("div");
        divProizvod.className = "proizvod";
      
        const pNaziv = document.createElement("p");
        pNaziv.textContent = `Naziv: ${proizvod.naziv}`;
      
        const pCena = document.createElement("p");
        pCena.textContent = `Cena: ${proizvod.cena} din`;
      
      
        const inputZalihe = document.createElement("input");
        inputZalihe.type = 'number';
        inputZalihe.id = "kolicina";
   
        
        divProizvod.append(pNaziv, pCena, inputZalihe);
      
        if (proizvod.constructor == PrehrambeniProizvod) {
            const pRok = document.createElement("p");
            pRok.textContent = `Rok proizvoda: ${proizvod.rok}`;
            divProizvod.append(pRok);
        }
        else if(proizvod.constructor == BelaTehnika){
            const pGarancija = document.createElement("p");
            pGarancija.textContent = `Garancija proizvoda : ${proizvod.garancija}. godine`;
            divProizvod.append(pGarancija)
     
           }
            const btnAdd = document.createElement("button");

            btnAdd.textContent = "Dodaj u korpu"
            btnAdd.addEventListener('click',()=>{
        
                if(inputZalihe.value == ''){
                    window.alert('Unesite kolicinu')
                    inputZalihe.value = ''
                }
                else if(inputZalihe.value > proizvod.zalihe){
                    window.alert(`Na lageru dostupno samo ${proizvod.zalihe}`)
                }
                
                kreiranjeKorpe(proizvod)
            
        })
      
            divProizvod.append(btnAdd)
            divProizvodi.appendChild(divProizvod)
          
    }) 
}
  
izlistajProizvode()
  
  //KREIRANJE KORPE

   const kreiranjeKorpe = (item ,user) => {
    
    const divProizvodKorpa = document.createElement("div");
    const pNaziv = document.createElement("p");
    pNaziv.textContent = `Naziv: ${item.naziv}`;
  
    const pCena = document.createElement("p");
    pCena.textContent = `Cena: ${item.cena} din`;
  
    const pKolicina = document.createElement("p");
    pKolicina.textContent = `Kolicina: ${item.zalihe}`;

    const btnDel = document.createElement("button")
    btnDel.textContent ='Obriši iz korpe'
    btnDel.addEventListener('click',()=>{
        divProizvodKorpa.remove()
        // user.korpa.splice(user.korpa.indexOf(item,1))
        // izlistajProizvode()
    })

    divProizvodKorpa.append(pNaziv,pCena,pKolicina,btnDel)
    divKorpa.appendChild(divProizvodKorpa)
   }



