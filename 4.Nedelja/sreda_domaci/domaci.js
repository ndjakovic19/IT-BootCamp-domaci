// 1.Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)

// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

// Даље, направити низ од ових објеката

let pokemoni =[
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
// 2.Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

// 1.NAČIN
// function sposobnostiPokemona(niz){
//     let tmp = []
//     niz.forEach(el1 => {
//     el1.sposobnosti.forEach(el2 => tmp.push(el2))
//     })
//      return tmp  
//    }

// 2.NAČIN

function sposobnostiPokemona(niz){
    return niz.map(el => el.sposobnosti).flat()
}
console.log(sposobnostiPokemona(pokemoni));

// 3.Сортирати покемоне по брзини, растуће.

function brzina(niz){
return niz.sort((a, b) => a.karakteristike.brzina - b.karakteristike.brzina)
}

console.log(brzina(pokemoni));
