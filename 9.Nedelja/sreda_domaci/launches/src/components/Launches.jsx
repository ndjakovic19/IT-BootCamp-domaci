import {Container} from'./Styled'
import Launch from './Launch'

const Launches =({launches})=>{
    return (
      <Container>
      {launches.map(launch => <Launch key = {launch.id} launch = {launch}/>)}
      </Container>
    )
}

export default Launches