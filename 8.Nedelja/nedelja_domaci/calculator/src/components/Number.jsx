const Number = ({inputNumber,setInputNumber}) => {
    return (
      <>
        <input onChange={(e)=> setInputNumber(e.target.value)} type="number" placeholder="number..." value ={inputNumber}/>
      </>
    );
  };
export default Number;
  