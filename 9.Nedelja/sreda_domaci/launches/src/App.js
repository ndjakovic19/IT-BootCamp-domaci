import { useEffect, useState } from "react";
import { getCompanyInfo, getPastLaunches } from "./service";

import Header from './components/Header'
import Launches from './components/Launches'
import Select from './components/Select'


const App = ()=> {

  const[launches,setLaunches] = useState([])
  const[company,setCompany] = useState([])
  const[year,setYear] = useState(-1)


  useEffect(()=>{
    getPastLaunches().then(res =>setLaunches(res.data))
    getCompanyInfo().then(res =>setCompany(res.data))

  },[])

  return (
    <>
    <Header company = {company}/>
    <Select launches = {launches}  setYear = {setYear}/>
    <Launches  launches = {year === -1 ? launches :launches.filter(launch => launch.date_utc.startsWith(year))} />
    </>
  )
}

export default App;
