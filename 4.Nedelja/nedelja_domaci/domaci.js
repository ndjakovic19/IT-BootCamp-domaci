// 4.Zadatak

let pokemoni = [
    {ime: 'Chikorita',
     vrsta : 'Travnati',  
     sposobnosti : ['Obaranje','Otrovni prah','Slatki miris'],
     karakteristike:{
        napad: 49,
        odbrana:65,
        brzina:45 
        } 
    },
    {ime: 'Articuno',
    vrsta : 'Ledeni',   
    sposobnosti : ['Ledeni napadi','Čitač misli', 'Okretnost'],
    karakteristike:{
        napad: 85, 
        odbrana:100,
        brzina:85
        }
    },
    {ime: 'Raichu',
    vrsta : 'Elektricni',  
    sposobnosti : ['Udar groma','Zamah repom','Brzi napad'],
    karakteristike: {
        napad: 90, 
        odbrana:55,
        brzina:100
        }
    },
    {ime: 'Bulbasaur',
    vrsta : 'Travnati',  
    sposobnosti : ['Bujanje', 'Otrov','Evolucija'],
    karakteristike: {
        napad: 45, 
        odbrana:65,
        brzina:50
        }
    }
]

let napad 

function najjaciPokemon(niz){
    napad = niz.sort((a, b) => b.karakteristike.napad - a.karakteristike.napad)
    let najjaci = niz[0]
    return najjaci
}
niz2 =[...pokemoni]
console.log(najjaciPokemon(niz2))

// 5.Zadatak

let btnPrikaz = document.querySelector('#prikaz')
let btnPobednik = document.querySelector('#pobednik')
let divWrapper = document.querySelector('.wrapper')
let divPrikaz= document.querySelector('#divPrikaz')




btnPrikaz.addEventListener('click',()=>{
    divPrikaz.innerHTML = ""

    pokemoni.forEach(el => {
    const divPokemoni = document.createElement('div')
    const paragrafOpis = document.createElement('p')
    paragrafOpis.innerHTML = `  Ime : ${el.ime}<br>
                                Vrsta :${el.vrsta}<br>
                                Sposobnost :${el.sposobnosti}<br>
                                Karakteristike: napad:${el.karakteristike.napad}
                                                odbrana:${el.karakteristike.odbrana}
                                                brzina:${el.karakteristike.brzina}
    `
    const img = document.createElement('img')
    img.src =`${el.ime}.png`
    divPokemoni.append(paragrafOpis,img)
    divPrikaz.appendChild(divPokemoni)
    })  

})


btnPobednik.addEventListener('click', ()=>{ 
divPrikaz.innerHTML = ""
let najjaci = najjaciPokemon(niz2)

const divPokemoni = document.createElement('div')
    const paragrafOpis = document.createElement('p')
    paragrafOpis.innerHTML = `  Ime : ${najjaci.ime}<br>
                                Vrsta :${najjaci.vrsta}<br>
                                Sposobnost :${najjaci.sposobnosti}<br>
                                Karakteristike: napad:${najjaci.karakteristike.napad}
                                                odbrana:${najjaci.karakteristike.odbrana}
                                                brzina:${najjaci.karakteristike.brzina}
    `
    const img = document.createElement('img')
    img.src =`${najjaci.ime }.png`
    divPokemoni.append(paragrafOpis,img)
    divPrikaz.appendChild(divPokemoni)

})



