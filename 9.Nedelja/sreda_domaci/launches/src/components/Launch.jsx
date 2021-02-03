import {DivLaunch,Img} from'./Styled'


const Launch =({launch})=>{
    return (
       <DivLaunch>
            <p>{launch.name}</p>  
            <hr/>
            <Img src={launch.links.patch.small} alt ={`${launch.name}'s img`}/>
           
       </DivLaunch>
    )
}

export default Launch