import{createToDom}from './DOM.js '
import service from './service.js'

let form = document.querySelector('#form')
let inputText = document.querySelector('#input-text')
let submit = document.querySelector('#submit')

service.data.forEach(el =>{
    createToDom(el)
})

const isValid = () => inputText.value != ''

form.addEventListener('submit',e =>{

e.preventDefault()
   
let item = {
     desc:inputText.value.trim(),
     done: false
}

if(isValid()){
   service.add(item)
   createToDom(service.data[service.data.length-1])
   console.log(service.data);
}
else
{
    window.alert('Polje ne sme biti prazno!')
}
   
inputText.value =''
   
})

 
   