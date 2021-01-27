import React from 'react'
import ShoppingList from './components/ShoppingList';


function App({shoppingItems,name}) {
  return (
    <ShoppingList shoppingItems = {shoppingItems} name = {name}/>
  )
}
export default App;
