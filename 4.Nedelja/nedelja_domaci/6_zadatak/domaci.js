const btnOrder1 = document.querySelector('#btn-order1')
const btnOrder2 = document.querySelector('#btn-order2')
const btnOrderNow1 = document.querySelector('#btn-order-now1')
const btnOrderNow2 = document.querySelector('#btn-order-now2')
const divWrapper = document.querySelector('#wrapper')

let counter = 0;

btnOrder1.addEventListener('click',()=>{
 counter++


})

btnOrder2.addEventListener('click',()=>{
counter++
})


btnOrderNow1.addEventListener('click',()=>{
let date = new Date()
const paragraf = document.createElement('p') 

if( counter == 0){
    window.alert('Niste dodali nijednu pizzu u naridžbinu!')
}
else if(counter == 1){
paragraf.innerHTML = `Naručili ste ${counter} pizzu, ${date} `
}
else if(counter > 1){
    paragraf.innerHTML = `Naručili ste ${counter} pizze, ${date} `
    }
divWrapper.appendChild(paragraf)
counter = 0
})  


btnOrderNow2.addEventListener('click',()=>{
    let date = new Date()
    const paragraf = document.createElement('p') 
    
    if( counter == 0){
        window.alert('Niste dodali nijednu pizzu u naridžbinu!')
    }
    else if(counter == 1){
    paragraf.innerHTML = `Naručili ste ${counter} pizzu, ${date} `
    }
    else if(counter > 1){
        paragraf.innerHTML = `Naručili ste ${counter} pizze, ${date} `
        }
    divWrapper.appendChild(paragraf)
    counter = 0
        
    })  