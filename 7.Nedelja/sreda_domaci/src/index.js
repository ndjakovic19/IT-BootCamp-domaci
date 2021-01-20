import axios from 'axios'

const select = document.querySelector('#select')
const app = document.querySelector('#app')
select.value = '-1'



select.addEventListener('change',(e) => {
    e.preventDefault()
    if(select.value === 'Launches'){
        app.innerHTML= ''
        return  axios.get('https://api.spacexdata.com/v3/launches')
                     .then(res => {
        //    console.log(res.data)
                     res.data.forEach(launch => addLaunch(launch))
        })  
    }
    if (select.value === 'Ships'){
        app.innerHTML= ''
        return axios.get('https://api.spacexdata.com/v3/ships')
                    .then(res =>{
          //  console.log(res.data);
                    res.data.forEach(ship => addShip(ship))
        })
    }
})


const addShip = ship => {
    const divItem = document.createElement('div')
    divItem.className ='div-ship'
    const h4 = document.createElement('h4')
    h4.textContent = `Ship name: ${ship.ship_name}`

    const hr = document.createElement('hr')

    const img = document.createElement('img')
    img.className= 'image'
    img.src = ship.image ? ship.image: 'https://via.placeholder.com/100'

    const pType = document.createElement('p')
    pType.textContent = `Ship type: ${ship.ship_type}`
    const pYearBuilt= document.createElement('p')
    pYearBuilt.textContent = `Year built: ${ship.year_built}`
    
    divItem.append(h4,hr,img,pType,pYearBuilt)
    app.appendChild(divItem)
   }


const addLaunch = launch => {
        const divItem = document.createElement('div')
        divItem.className ='div-launch'
        const h4 = document.createElement('h4')
        h4.textContent = `Mission name: ${launch.mission_name}`

        const hr = document.createElement('hr')

        const img = document.createElement('img')
        img.className= 'image'
        img.src = launch.links.mission_patch_small ? launch.links.mission_patch_small : 'https://via.placeholder.com/100' // Не приказујемо слику, али не дирамо остатак информација о лансирању
        
        const pVideo = document.createElement('p')
        pVideo.textContent = 'Video: '
        const linkVideo = document.createElement('a') 
        linkVideo.href =  launch.links.video_link
        linkVideo.target = '_blank'
        linkVideo.textContent = launch.links.video_link
        pVideo.appendChild(linkVideo)


        const pWikipedia = document.createElement('p')
        pWikipedia.textContent = 'Wikipedia: '
        const linkWikipedia = document.createElement('a') 
        linkWikipedia.href =  launch.links.wikipedia
        linkWikipedia.target = '_blank'
        linkWikipedia.textContent = launch.links.wikipedia
        pWikipedia.appendChild(linkWikipedia)

        divItem.append(h4,hr,img,pVideo,pWikipedia)
        app.appendChild(divItem)
    }



        
