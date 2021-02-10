import { useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllUsers } from "../service"

const Login = ({setUser,}) => {
    
const[username, setUsername]= useState('')
const[password, setPassword]= useState('')

const history = useHistory()


return (
    <>
    <div>
        <h2>Login</h2>
        <label>Username: </label>
        <input type= 'text' onChange = {(e)=>setUsername(e.target.value)}/>
        <label>Password: </label>
        <input type= 'password' onChange = {(e)=>setPassword(e.target.value)}/>
        <button onClick= {()=> {
            getAllUsers().then(res =>{
                let user = res.data.find(el=> el.username === username && el.password === password )
                 if(user){
                    setUser(user)
                    history.push('/quotes')
                }
                else{
                    console.log('Neispravni podaci');  
                }

            })
        }}>Login</button>
        <p>Novi korisnik?</p>
        <button onClick={()=> history.push('/register')}>Register</button>
    </div>
    </>
) 
}
export default Login