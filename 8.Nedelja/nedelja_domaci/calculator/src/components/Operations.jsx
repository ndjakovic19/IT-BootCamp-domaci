import Button from './Button'

const Operations = ({ setOperation,inputNumber,setInputNumber,setResult,setSteps}) => {
  let operations = ["+", "-", "*", "/", "clear"]
  
  return (
    <>
        {operations.map((operation) => (
        <Button value={operation} key ={operation} setOperation = {setOperation} inputNumber = {inputNumber} setInputNumber={setInputNumber} setResult = {setResult} setSteps = {setSteps} />
      ))}
    </>
  );
};
export default Operations;
