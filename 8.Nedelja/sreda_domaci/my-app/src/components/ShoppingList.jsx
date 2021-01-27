import React from 'react'
import ShoppingItem from './ShopingItem'

const ShoppingList = ({shoppingItems,name}) => {
return (
        <div>
            <h1>Shopping list for {name}</h1>
            <ShoppingItem shoppingItems = {shoppingItems}/>
        </div>
)
}

export default ShoppingList