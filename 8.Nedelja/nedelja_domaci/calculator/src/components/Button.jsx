const Button = ({value,setOperation,inputNumber,setInputNumber,setSteps,setResult}) => {
    return (
      <>
        <button onClick={()=>{
     
         value === 'clear' ? setSteps(''): setSteps(prev => prev + value + inputNumber)
         
         setOperation(value)
         switch(value){
             case '+': setResult( prev => Number(prev) + Number(inputNumber));break
             case '-': setResult( prev => Number(prev) - Number(inputNumber));break
             case '*': setResult( prev => Number(prev) * Number(inputNumber));break
             case '/': setResult( prev => Number(prev) / Number(inputNumber));break
             case 'clear': setResult('');break
             default: setResult('Not valid');break
         }
         setInputNumber('')

        }} >{value}</button>
      </>
    )
  }

  export default Button;
  