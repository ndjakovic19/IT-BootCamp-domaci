import {useState} from 'react'
import Result from'./Result.jsx'
import Number from'./Number'
import Operations from'./Operations'
import Steps from'./Steps'

const Calculator = () => {
const[inputNumber,setInputNumber] = useState('')
const[result,setResult] = useState('0')
const[operation,setOperation] = useState('')
const[steps,setSteps] = useState('')

return(
<>
    <Result result ={result} setResult={setResult}/>
    <Number inpuNumber = {inputNumber} setInputNumber = {setInputNumber}/>
    <Operations setOperation ={setOperation} inputNumber = {inputNumber} setInputNumber = {setInputNumber} setResult ={setResult} setSteps = {setSteps} />
    <Steps steps = {steps}/>
</>
)
}

export default Calculator