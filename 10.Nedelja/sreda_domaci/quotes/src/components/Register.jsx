import { useEffect, useState } from "react"
import {v1 as uuidv1} from 'uuid'
import { getAllUsers, postUser } from "../service"
import { useHistory } from "react-router-dom"


const Register= () => {
const[username, setUsername]= useState('')
const[password, setPassword]= useState('')
const[email,setEmail] =  useState('')
const[users,setUsers] =  useState([])
const history = useHistory()

useEffect(()=>{
    getAllUsers().then(res => setUsers(res.data))
},[])

const isValid = ()=> username.length >= 4
                    &&
                //  !users.find(user.username === username) 
                //  &&        
                //  !users.find(user.email === email)
                //  &&
                     password.length >= 8 
                    &&
                     /([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
                    && 
                     /[A-Za-z0-9]/.test(password)
           

return (
        <>
        <h2>Register</h2>
        <label>Username: </label>
        <input value = {username} type= 'text' onChange = {(e)=>setUsername(e.target.value)}/>
        <label>Password: </label>
        <input value = {password} type= 'password' onChange = {(e)=>setPassword(e.target.value)}/>
        <label>Email: </label>
        <input  value = {email} type= 'text' onChange = {(e)=>setEmail(e.target.value)}/>

        <button onClick= {()=>{
            let user = {
                id : uuidv1(),
                username : username,
                password : password,
                email : email,
            }
            if (isValid(users)){
            console.log(user);
            postUser(user).then(res => {
            setUsers(prev =>[...prev,res.data])
            history.push('/quotes')
            })
            }
            else{
                console.warn('Greška');
                setUsername('')
                setEmail('')
                setPassword('')
            }
            
        }}>Submit</button>
        </>
    )
}
export default Register