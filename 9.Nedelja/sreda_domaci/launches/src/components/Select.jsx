const Select = ({launches,setYear}) => {

  let years = [...new Set(launches.map((launch) => launch.date_utc.slice(0,4)))]

  return (

      <select onChange={(e)=>{

      setYear(e.target.value)

      }}>
        <option value = '-1' disabled hidden >Odaberi godinu</option> 
        {years.map(year => <option key={year} value = {year}>{year}</option>)}
      </select>
  );
};

export default Select;
