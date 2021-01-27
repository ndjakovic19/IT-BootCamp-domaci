import React from 'react'

export let shoppingItems = [
    {   id: 0,
        naziv: 'Mleko',
        cena : 100
    },
    {   id: 1,
        naziv: 'Brasno',
        cena : 80
    },
    {   id: 2,
        naziv: 'Plazma',
        cena : 120
    },
    {   id: 3,
        naziv: 'Jaja',
        cena : 140
    }
]


const ShoppingItem = ({shoppingItems}) =>{
    return(
        shoppingItems.map(item => <div key = {item.id}>
                                  <p>Naziv: {item.naziv}</p>
                                  <p>Cena: {item.cena}</p>
                                  </div> )

    )
}

export default ShoppingItem
