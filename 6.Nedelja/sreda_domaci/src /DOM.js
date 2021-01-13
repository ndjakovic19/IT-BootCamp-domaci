import service from './service.js'
import servise from './service.js'

export const createToDom = (item)=>{

 const divItem = document.createElement('div')
 divItem.className ='div-item'

 const pText = document.createElement('p')
 pText.textContent = item.desc
 
 const labelDone = document.createElement('label')
 labelDone.for ='done-checkbox'
 labelDone.textContent='Done:'

 const inputDone = document.createElement('input')
 inputDone.type='checkbox'
 inputDone.id = 'done-checkbox'


inputDone.addEventListener('click',()=>{
    if(item.done == true){
        item.done = false
        inputDone.checked = false
        pText.style.textDecoration ='none'
        pText.style.background = 'none'
        console.log(service.data); 
     }
     else
     {
        item.done = true
        pText.style.textDecoration='line-through'
        pText.style.background = '#eee'
        console.log(service.data);
     }
 })


const btnDelete = document.createElement('button')
btnDelete.className='btn-delete'
btnDelete.textContent = 'X'

btnDelete.addEventListener('click',()=>{
    divItem.remove()
    service.deleteById(item.id)
    console.log(service.data);
})

const btnEdit =document.createElement('button')
btnEdit.className='btn-edit'
btnEdit.textContent = 'Edit'

divItem.append(pText,labelDone,inputDone,btnEdit,btnDelete)
document.body.appendChild(divItem);
return divItem
}


